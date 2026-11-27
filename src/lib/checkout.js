/**
 * Lógica do checkout (sem React) — API do n8n, formatação, validação e storage local.
 * O servidor recalcula tudo (preço, cupom, parcelas); aqui é só UX.
 */

const ENV = (typeof import.meta !== 'undefined' && import.meta.env) || {};
export const API_BASE = (ENV.VITE_CHECKOUT_API || 'https://n8n.gruponunca.com.br/webhook').replace(/\/$/, '');
// Chave pública do Turnstile. Em localhost usa a chave de teste da Cloudflare (sempre passa).
export const TURNSTILE_SITE_KEY = ENV.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAAFyzC2NrD3Yy-gwQ';
export const TURNSTILE_TEST_KEY = '1x00000000000000000000AA';

// Plano B do cartão: link de pagamento do Asaas de cada produto (= config_id da aba `produtos`).
// O caminho normal cria a cobrança via n8n (fatura já com nome/e-mail/CPF); se o n8n falhar, o site abre este link.
// A liberação funciona nos dois: o payment-workflow-assas resolve o produto pelo externalReference ou pelo paymentLink.
export const ASAAS_LINKS = {
  'nutricao-precisao': 'vg0jgsbt0t7uw76a',
  'master-class-endurance-capelato': 'dpj4hip035hevge2',
  'master-class-glp1-capelato': 'rd93q8y9y4h4kcyd',
  'antropo-360': '44lc1lltezodeo4e',
  'imersao-nutricao-bariatrica': 'r4c89px39fizcjo5',
  'imersao-nutricao-bariatrica-promo': 'odg0gtl9kxij42y4',
  'laminas-atendimento-bariatrico': '97f8ftgvx7o5jlwr',
};
export const asaasLinkUrl = (slug) => (ASAAS_LINKS[slug] ? `https://www.asaas.com/c/${ASAAS_LINKS[slug]}` : null);

export const PROFILE_KEY = 'nunca_checkout_profile';
const PENDING_PREFIX = 'nunca_checkout_pix_';
const PENDING_TTL_MS = 24 * 3600 * 1000;

// ------------------------------------------------------------------ formatação
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export function formatBRL(cents) {
  return brl.format((Number(cents) || 0) / 100).replace(/\u00a0/g, ' ');
}

export function parcelaLabel({ parcelas, totalCents, parcelaCents }) {
  if (parcelas === 1) return `À vista · ${formatBRL(totalCents)}`;
  return `${parcelas}x de ${formatBRL(parcelaCents)} · total ${formatBRL(totalCents)}`;
}

export function maskTelefone(v) {
  const d = String(v || '').replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function maskCpf(v) {
  const d = String(v || '').replace(/\D/g, '').slice(0, 11);
  return d
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1-$2');
}

// ------------------------------------------------------------------ validação (espelha checkout/lib/validate.js do n8n)
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[A-Za-z]{2,}$/;
export const emailValido = (e) => EMAIL_RE.test(String(e || '').trim());

export function cpfValido(v) {
  const c = String(v || '').replace(/\D/g, '');
  if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
  const dv = (len) => {
    let s = 0;
    for (let i = 0; i < len; i++) s += Number(c[i]) * (len + 1 - i);
    const r = (s * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return dv(9) === Number(c[9]) && dv(10) === Number(c[10]);
}

export function telefoneValido(v) {
  const d = String(v || '').replace(/\D/g, '');
  return d.length === 10 || d.length === 11;
}

export function validarForm({ nome, email, tel, cpf, metodo }) {
  const erros = {};
  const n = String(nome || '').trim().replace(/\s+/g, ' ');
  if (n.length < 3 || n.length > 120 || !n.includes(' ')) erros.nome = 'Informe nome e sobrenome';
  if (!emailValido(email)) erros.email = 'E-mail inválido';
  if (!telefoneValido(tel)) erros.tel = 'Telefone com DDD';
  const cpfDigits = String(cpf || '').replace(/\D/g, '');
  if (metodo === 'cartao' || cpfDigits) {
    if (!cpfValido(cpfDigits)) erros.cpf = metodo === 'cartao' ? 'CPF obrigatório no cartão' : 'CPF inválido';
  }
  return erros;
}

export const CAMPO_MSG = {
  nome: 'Informe nome e sobrenome',
  email: 'E-mail inválido',
  tel: 'Telefone com DDD',
  cpf: 'CPF inválido',
  cupom: 'Cupom inválido',
};

// Só redireciona para fatura do Asaas (evita open redirect se a resposta vier adulterada).
export function invoiceUrlSegura(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && (u.hostname === 'asaas.com' || u.hostname.endsWith('.asaas.com'));
  } catch {
    return false;
  }
}

// ------------------------------------------------------------------ storage (falha silenciosa: modo privado etc.)
function store() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : globalThis.localStorage;
  } catch {
    return null;
  }
}

export function loadProfile() {
  try {
    const p = JSON.parse(store()?.getItem(PROFILE_KEY) || 'null');
    if (!p || typeof p !== 'object') return null;
    const s = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
    return { nome: s(p.nome, 120), email: s(p.email, 320), tel: s(p.tel, 20), cpf: s(p.cpf, 14) };
  } catch {
    return null;
  }
}

export function saveProfile({ nome, email, tel, cpf }, { lembrarCpf = false } = {}) {
  try {
    const p = { nome, email, tel };
    if (lembrarCpf && cpf) p.cpf = cpf;
    store()?.setItem(PROFILE_KEY, JSON.stringify(p));
  } catch { /* ignora */ }
}

export function clearProfile() {
  try { store()?.removeItem(PROFILE_KEY); } catch { /* ignora */ }
}

export function loadPendingPix(slug, now = Date.now()) {
  try {
    const p = JSON.parse(store()?.getItem(PENDING_PREFIX + slug) || 'null');
    if (!p || !p.orderId || !p.payload || now - (p.criadoEm || 0) > PENDING_TTL_MS) return null;
    return p;
  } catch {
    return null;
  }
}

export function savePendingPix(slug, pedido, now = Date.now()) {
  try { store()?.setItem(PENDING_PREFIX + slug, JSON.stringify({ ...pedido, criadoEm: now })); } catch { /* ignora */ }
}

export function clearPendingPix(slug) {
  try { store()?.removeItem(PENDING_PREFIX + slug); } catch { /* ignora */ }
}

// ------------------------------------------------------------------ API
export class ApiError extends Error {
  constructor(msg, { status, campos } = {}) {
    super(msg);
    this.status = status;
    this.campos = campos || [];
  }
}

async function call(path, { method = 'GET', body, query, fetchImpl = globalThis.fetch, timeoutMs = 25000 } = {}) {
  const url = new URL(`${API_BASE}/${path}`);
  if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  let res;
  try {
    res = await fetchImpl(url.toString(), {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl?.signal,
      credentials: 'omit',
    });
  } catch {
    throw new ApiError('Não foi possível conectar. Verifique sua internet e tente de novo.', { status: 0 });
  } finally {
    if (timer) clearTimeout(timer);
  }
  let data = null;
  try { data = await res.json(); } catch { /* corpo vazio/inválido */ }
  if (!res.ok || !data || data.ok === false) {
    throw new ApiError(data?.erro || 'Algo deu errado. Tente novamente em instantes.', { status: res.status, campos: data?.campos });
  }
  return data;
}

export const api = {
  produto: (slug, o) => call('checkout/product', { query: { slug }, ...o }),
  colecao: (c, o) => call('checkout/collection', { query: { c }, ...o }),
  cotar: (body, o) => call('checkout/quote', { method: 'POST', body, ...o }),
  pedido: (body, o) => call('checkout/order', { method: 'POST', body, ...o }),
  status: (id, o) => call('checkout/order-status', { query: { id }, ...o }),
  jaPaguei: (id, o) => call('checkout/order-paid', { method: 'POST', body: { id }, ...o }),
  membro: (email, o) => call('checkout/member-check', { method: 'POST', body: { email }, ...o }),
};

// ------------------------------------------------------------------ carrinho (Black Friday)
// Carrinho guardado por coleção no localStorage. Só slugs e um id de versão: o preço vem sempre do servidor.
export const CARRINHO_PREFIX = 'nunca_cart_';
const CART_MAX = 20;

export function loadCarrinho(colecao) {
  try {
    const v = JSON.parse(store()?.getItem(CARRINHO_PREFIX + colecao) || '[]');
    return Array.isArray(v) ? v.filter((s) => typeof s === 'string' && /^[a-z0-9-]{3,80}$/.test(s)).slice(0, CART_MAX) : [];
  } catch { return []; }
}

export function saveCarrinho(colecao, slugs) {
  try { store()?.setItem(CARRINHO_PREFIX + colecao, JSON.stringify(slugs.slice(0, CART_MAX))); } catch { /* ignora */ }
}

export function toggleItem(slugs, slug) {
  if (slugs.includes(slug)) return slugs.filter((s) => s !== slug);
  return slugs.length >= CART_MAX ? slugs : [...slugs, slug];
}

// Quantos dias de acesso valem: o carrinho usa o maior prazo entre os itens (vem do servidor).
export function totalCarrinho(itens, slugs) {
  const sel = itens.filter((i) => slugs.includes(i.slug));
  return { quantidade: sel.length, precoCents: sel.reduce((a, i) => a + i.precoCents, 0) };
}
