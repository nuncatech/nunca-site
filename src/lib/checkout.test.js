import test from 'node:test';
import assert from 'node:assert/strict';
import * as C from './checkout.js';

// localStorage em memória para os testes
const mem = new Map();
globalThis.localStorage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };

test('formatação BRL e rótulo de parcelas', () => {
  assert.equal(C.formatBRL(123750), 'R$ 1.237,50');
  assert.equal(C.parcelaLabel({ parcelas: 1, totalCents: 35000, parcelaCents: 35000 }), 'À vista · R$ 350,00');
  assert.equal(C.parcelaLabel({ parcelas: 3, totalCents: 37000, parcelaCents: 12334 }), '3x de R$ 123,34 · total R$ 370,00');
});

test('máscaras de telefone e CPF', () => {
  assert.equal(C.maskTelefone('44988460000'), '(44) 98846-0000');
  assert.equal(C.maskTelefone('4432220000'), '(44) 3222-0000');
  assert.equal(C.maskCpf('52998224725'), '529.982.247-25');
});

test('validação espelha o servidor', () => {
  assert.ok(C.cpfValido('529.982.247-25'));
  assert.ok(!C.cpfValido('111.111.111-11'));
  const ok = { nome: 'Ana Souza', email: 'ana@x.com', tel: '(44) 98846-0000', cpf: '', metodo: 'pix' };
  assert.deepEqual(C.validarForm(ok), {});
  assert.deepEqual(Object.keys(C.validarForm({ ...ok, metodo: 'cartao' })), ['cpf']); // CPF obrigatório no cartão
  assert.deepEqual(Object.keys(C.validarForm({ ...ok, nome: 'Ana', email: 'x', tel: '123' })).sort(), ['email', 'nome', 'tel']);
});

test('só redireciona para fatura do Asaas', () => {
  assert.ok(C.invoiceUrlSegura('https://www.asaas.com/i/abc123'));
  assert.ok(!C.invoiceUrlSegura('https://asaas.com.evil.io/i/abc'));
  assert.ok(!C.invoiceUrlSegura('http://www.asaas.com/i/abc'));
  assert.ok(!C.invoiceUrlSegura('javascript:alert(1)'));
});

test('perfil: CPF só é salvo se pedir; limpar apaga', () => {
  C.saveProfile({ nome: 'Ana Souza', email: 'ana@x.com', tel: '(44) 98846-0000', cpf: '529.982.247-25' });
  assert.equal(C.loadProfile().cpf, '');
  C.saveProfile({ nome: 'Ana Souza', email: 'ana@x.com', tel: '1', cpf: '529.982.247-25' }, { lembrarCpf: true });
  assert.equal(C.loadProfile().cpf, '529.982.247-25');
  C.clearProfile();
  assert.equal(C.loadProfile(), null);
  mem.set(C.PROFILE_KEY, '{lixo');
  assert.equal(C.loadProfile(), null);
});

test('PIX pendente expira em 24h', () => {
  C.savePendingPix('x', { orderId: 'o1', payload: 'p' }, 1000);
  assert.equal(C.loadPendingPix('x', 2000).orderId, 'o1');
  assert.equal(C.loadPendingPix('x', 1000 + 25 * 3600 * 1000), null);
});

test('api: monta URL, envia JSON e traduz erros', async () => {
  const calls = [];
  const fake = (status, body) => async (url, init) => { calls.push({ url, init }); return { ok: status < 400, status, json: async () => body }; };
  const p = await C.api.produto('antropo-360', { fetchImpl: fake(200, { ok: true, nome: 'A' }) });
  assert.equal(p.nome, 'A');
  assert.equal(calls[0].url, 'https://n8n.gruponunca.com.br/webhook/checkout/product?slug=antropo-360');
  await C.api.membro('a@x.com', { fetchImpl: fake(200, { ok: true, cadastrado: false }) });
  assert.equal(calls[1].init.method, 'POST');
  assert.deepEqual(JSON.parse(calls[1].init.body), { email: 'a@x.com' });
  assert.equal(calls[1].init.credentials, 'omit');
  await assert.rejects(C.api.pedido({}, { fetchImpl: fake(400, { ok: false, erro: 'Confira os dados informados', campos: ['cpf'] }) }),
    (e) => e.message === 'Confira os dados informados' && e.campos[0] === 'cpf' && e.status === 400);
  await assert.rejects(C.api.status('x', { fetchImpl: async () => { throw new TypeError('net'); } }), (e) => e.status === 0);
});

test('carrinho: toggle, limite de 20 e leitura defensiva', () => {
  const s = C.toggleItem(['lab-a-x'], 'lab-b-x');
  assert.deepEqual(s, ['lab-a-x', 'lab-b-x']);
  assert.deepEqual(C.toggleItem(s, 'lab-a-x'), ['lab-b-x']);
  const cheio = Array.from({ length: 20 }, (_, i) => `lab-${i}-x`);
  assert.equal(C.toggleItem(cheio, 'lab-novo-x').length, 20);
  assert.deepEqual(C.totalCarrinho([{ slug: 'a', precoCents: 1500 }, { slug: 'b', precoCents: 1500 }], ['a', 'b']),
    { quantidade: 2, precoCents: 3000, precoFinalCents: 3000 });
});

test('total do carrinho com cupom de preço por item (BLACKFRIDAY a R$ 15)', () => {
  const itens = [
    { slug: 'pres', precoCents: 10000 },
    { slug: 'onl', precoCents: 3000 },
    { slug: 'barato', precoCents: 1200 },
  ];
  // sem cupom: soma cheia
  assert.deepEqual(C.totalCarrinho(itens, ['pres', 'onl']), { quantidade: 2, precoCents: 13000, precoFinalCents: 13000 });
  // com cupom: cada item vira R$ 15, mantendo o cheio para o riscado
  assert.deepEqual(C.totalCarrinho(itens, ['pres', 'onl'], { precoItemCents: 1500 }),
    { quantidade: 2, precoCents: 13000, precoFinalCents: 3000 });
  // item mais barato que o cupom não fica mais caro, e o piso de R$ 5 vale
  assert.deepEqual(C.totalCarrinho(itens, ['barato'], { precoItemCents: 1500 }),
    { quantidade: 1, precoCents: 1200, precoFinalCents: 1200 });
  assert.deepEqual(C.totalCarrinho([{ slug: 'x', precoCents: 10000 }], ['x'], { precoItemCents: 100 }),
    { quantidade: 1, precoCents: 10000, precoFinalCents: 500 });
});
