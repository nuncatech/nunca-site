import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import { Check, Copy, CreditCard, Loader2, Lock, QrCode, Tag, X, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Turnstile from '@/components/checkout/Turnstile';
import { LINKS } from '@/lib/constants';
import {
  api, formatBRL, parcelaLabel, maskTelefone, maskCpf, validarForm, emailValido, invoiceUrlSegura, CAMPO_MSG,
  loadProfile, saveProfile, clearProfile, loadPendingPix, savePendingPix, clearPendingPix,
} from '@/lib/checkout';

const inputCls = (erro) =>
  `w-full rounded-md border bg-white dark:bg-[#232323] px-3 py-2.5 text-base text-foreground dark:text-foreground-dark placeholder:text-foreground/40 dark:placeholder:text-foreground-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary-dark/40 transition-colors ${
    erro ? 'border-red-500' : 'border-foreground/15 dark:border-foreground-dark/20'
  }`;

function Campo({ id, label, erro, children, dica }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5 text-foreground/80 dark:text-foreground-dark/80">{label}</label>
      {children}
      {erro ? <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{erro}</p> : dica}
    </div>
  );
}
Campo.propTypes = { id: PropTypes.string, label: PropTypes.string, erro: PropTypes.string, children: PropTypes.node, dica: PropTypes.node };

function useNoIndex(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex, nofollow';
    document.head.appendChild(m);
    return () => { document.title = prev; m.remove(); };
  }, [title]);
}

export default function Checkout() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [produto, setProduto] = useState(null);
  const [loadErr, setLoadErr] = useState('');
  const [pix, setPix] = useState(() => loadPendingPix(slug));

  useNoIndex(produto ? `Checkout · ${produto.nome} | NUNCA` : 'Checkout | NUNCA');

  useEffect(() => {
    let vivo = true;
    api.produto(slug)
      .then((p) => vivo && setProduto(p))
      .catch((e) => vivo && setLoadErr(e.status === 404 || e.status === 400 ? 'Este produto não está disponível para compra.' : e.message));
    return () => { vivo = false; };
  }, [slug]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-background dark:bg-background-dark">
      <div className="max-w-xl mx-auto">
        {loadErr ? (
          <Aviso tipo="erro" titulo="Ops">{loadErr}</Aviso>
        ) : !produto ? (
          <div className="flex items-center justify-center py-24 text-foreground/60 dark:text-foreground-dark/60" aria-live="polite">
            <Loader2 className="h-6 w-6 animate-spin mr-2" /> Carregando…
          </div>
        ) : pix ? (
          <PixPagamento slug={slug} produto={produto} pedido={pix} onNovo={() => { clearPendingPix(slug); setPix(null); }} />
        ) : (
          <Formulario slug={slug} produto={produto} cupomInicial={searchParams.get('cupom') || ''} onPix={setPix} />
        )}
        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-foreground/50 dark:text-foreground-dark/50">
          <Lock className="h-3.5 w-3.5" /> Pagamento seguro · dados do cartão digitados só no ambiente do Asaas
        </p>
      </div>
    </div>
  );
}

function Aviso({ tipo = 'info', titulo, children }) {
  const cls = {
    erro: 'border-red-300 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200',
    info: 'border-cta/60 bg-cta/10 text-foreground dark:text-foreground-dark',
    ok: 'border-primary/40 bg-primary/10 text-primary dark:text-primary-dark',
  }[tipo];
  const Icon = tipo === 'erro' ? AlertCircle : tipo === 'ok' ? Check : Info;
  return (
    <div className={`rounded-lg border p-4 text-sm flex gap-3 ${cls}`} role={tipo === 'erro' ? 'alert' : 'status'}>
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div>{titulo && <p className="font-semibold mb-0.5">{titulo}</p>}{children}</div>
    </div>
  );
}
Aviso.propTypes = { tipo: PropTypes.string, titulo: PropTypes.string, children: PropTypes.node };

// ============================================================== formulário
function Formulario({ slug, produto, cupomInicial, onPix }) {
  const perfilSalvo = useMemo(() => loadProfile(), []);
  const [form, setForm] = useState(() => ({
    nome: perfilSalvo?.nome || '', email: perfilSalvo?.email || '',
    tel: maskTelefone(perfilSalvo?.tel || ''), cpf: maskCpf(perfilSalvo?.cpf || ''),
  }));
  const [lembrar, setLembrar] = useState(true);
  const [lembrarCpf, setLembrarCpf] = useState(!!perfilSalvo?.cpf);
  const [metodo, setMetodo] = useState(produto.metodos.includes('pix') ? 'pix' : 'cartao');
  const [parcelas, setParcelas] = useState(1);
  const [cupomInput, setCupomInput] = useState(cupomInicial);
  const [cupomAberto, setCupomAberto] = useState(!!cupomInicial);
  const [cupom, setCupom] = useState(null);
  const [cupomErr, setCupomErr] = useState('');
  const [cupomLoading, setCupomLoading] = useState(false);
  const [erros, setErros] = useState({});
  const [erroGeral, setErroGeral] = useState('');
  const [token, setToken] = useState('');
  const [tsKey, setTsKey] = useState(0);
  const [tsFalhou, setTsFalhou] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [membro, setMembro] = useState(null); // true | false | null (desconhecido)
  const emailChecado = useRef('');

  const simulacao = cupom?.simulacao?.length ? cupom.simulacao : produto.parcelas;
  const liquido = cupom ? cupom.liquidoCents : produto.precoCents;
  const linhaCartao = simulacao.find((s) => s.parcelas === parcelas) || simulacao[0];
  const total = metodo === 'pix' ? liquido : linhaCartao?.totalCents;

  const set = (k) => (e) => {
    let v = e.target.value;
    if (k === 'tel') v = maskTelefone(v);
    if (k === 'cpf') v = maskCpf(v);
    setForm((f) => ({ ...f, [k]: v }));
    if (erros[k]) setErros((x) => ({ ...x, [k]: undefined }));
  };

  const checarMembro = useCallback((email) => {
    const e = String(email || '').trim().toLowerCase();
    if (!emailValido(e) || e === emailChecado.current) return;
    emailChecado.current = e;
    setMembro(null);
    api.membro(e).then((r) => { if (emailChecado.current === e) setMembro(r.cadastrado); }).catch(() => {});
  }, []);

  // Dados lembrados: já checa o e-mail salvo.
  useEffect(() => { if (perfilSalvo?.email) checarMembro(perfilSalvo.email); }, [perfilSalvo, checarMembro]);

  const aplicarCupom = useCallback(async (codigo) => {
    const c = String(codigo || '').trim().toUpperCase();
    if (!c) return;
    setCupomErr('');
    if (!/^[A-Z0-9_-]{6,30}$/.test(c)) { setCupomErr('Cupom inválido'); return; }
    setCupomLoading(true);
    try {
      const metodoQ = produto.metodos.includes('cartao') ? 'cartao' : 'pix';
      const email = emailValido(form.email) ? form.email.trim().toLowerCase() : undefined;
      const r = await api.cotar({ slug, metodo: metodoQ, parcelas: 1, cupom: c, email });
      if (!r.desconto) throw new Error('Cupom inválido');
      setCupom({ codigo: r.desconto.codigo, valorCents: r.desconto.valorCents, liquidoCents: r.liquidoCents, simulacao: r.simulacao || [] });
    } catch (e) {
      setCupom(null);
      setCupomErr(e.message || 'Cupom inválido');
    } finally {
      setCupomLoading(false);
    }
  }, [form.email, produto.metodos, slug]);

  // ?cupom=XXXX na URL: aplica sozinho.
  const autoCupom = useRef(false);
  useEffect(() => {
    if (cupomInicial && !autoCupom.current) { autoCupom.current = true; aplicarCupom(cupomInicial); }
  }, [cupomInicial, aplicarCupom]);

  const removerCupom = () => { setCupom(null); setCupomInput(''); setCupomErr(''); };

  const enviar = async (e) => {
    e.preventDefault();
    setErroGeral('');
    const errs = validarForm({ ...form, metodo });
    setErros(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`ck-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    if (!token) { setErroGeral(tsFalhou ? 'A verificação anti-robô não carregou. Desative bloqueadores e recarregue a página.' : 'Aguarde a verificação anti-robô terminar e tente de novo.'); return; }
    setEnviando(true);
    if (lembrar) saveProfile(form, { lembrarCpf }); else clearProfile();
    try {
      const r = await api.pedido({
        slug, metodo, parcelas: metodo === 'cartao' ? parcelas : 1,
        nome: form.nome.trim(), email: form.email.trim().toLowerCase(), tel: form.tel, cpf: form.cpf.replace(/\D/g, '') || undefined,
        cupom: cupom?.codigo || undefined, turnstileToken: token,
      });
      if (r.metodo === 'cartao') {
        if (!invoiceUrlSegura(r.invoiceUrl)) throw new Error('Não conseguimos abrir a página de pagamento. Tente novamente.');
        window.location.assign(r.invoiceUrl);
        return; // mantém "enviando" até sair da página
      }
      const pedido = { orderId: r.orderId, payload: r.pix.payload, recebedor: r.pix.recebedor, totalCents: r.totalCents, email: form.email.trim().toLowerCase(), membro };
      savePendingPix(slug, pedido);
      onPix(pedido);
    } catch (err) {
      const campos = err.campos || [];
      if (campos.length) setErros(Object.fromEntries(campos.map((c) => [c, CAMPO_MSG[c] || 'Confira este campo'])));
      if (campos.includes('cupom')) setCupom(null);
      setErroGeral(err.message);
      setToken('');
      setTsKey((k) => k + 1); // token do Turnstile é de uso único
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={enviar} noValidate className="space-y-6">
      {/* Resumo */}
      <section className="rounded-lg bg-muted dark:bg-muted-dark p-5">
        <p className="text-xs uppercase tracking-wide text-foreground/60 dark:text-foreground-dark/60 mb-1">Você está comprando</p>
        <h1 className="text-2xl font-serif font-bold leading-tight">{produto.nome}</h1>
        <div className="mt-3 flex items-baseline gap-2 flex-wrap">
          {cupom && <span className="text-foreground/50 dark:text-foreground-dark/50 line-through">{formatBRL(produto.precoCents)}</span>}
          <span className="text-2xl font-semibold text-foreground dark:text-foreground-dark" data-testid="total">{formatBRL(total)}</span>
          {metodo === 'cartao' && parcelas > 1 && (
            <span className="text-sm text-foreground/70 dark:text-foreground-dark/70">em {parcelas}x de {formatBRL(linhaCartao.parcelaCents)}</span>
          )}
        </div>
        {cupom && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary dark:text-primary-dark">
            <Tag className="h-4 w-4" /> Cupom <strong>{cupom.codigo}</strong>: −{formatBRL(cupom.valorCents)}
            <button type="button" onClick={removerCupom} className="ml-1 opacity-60 hover:opacity-100" aria-label="Remover cupom"><X className="h-4 w-4" /></button>
          </p>
        )}
      </section>

      {/* Dados */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-serif font-bold">Seus dados</h2>
          {perfilSalvo && (
            <button type="button" className="text-sm text-accent dark:text-accent-dark hover:underline"
              onClick={() => { clearProfile(); setForm({ nome: '', email: '', tel: '', cpf: '' }); setMembro(null); emailChecado.current = ''; setLembrarCpf(false); }}>
              Não é você? Limpar
            </button>
          )}
        </div>
        <Campo id="ck-nome" label="Nome completo" erro={erros.nome}>
          <input id="ck-nome" className={inputCls(erros.nome)} value={form.nome} onChange={set('nome')} autoComplete="name" maxLength={120} required />
        </Campo>
        <Campo id="ck-email" label="E-mail" erro={erros.email}>
          <input id="ck-email" type="email" inputMode="email" className={inputCls(erros.email)} value={form.email}
            onChange={(e) => { set('email')(e); if (membro !== null) setMembro(null); emailChecado.current = ''; }}
            onBlur={(e) => checarMembro(e.target.value)} autoComplete="email" maxLength={320} required />
        </Campo>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Campo id="ck-tel" label="WhatsApp" erro={erros.tel}>
            <input id="ck-tel" type="tel" inputMode="tel" className={inputCls(erros.tel)} value={form.tel} onChange={set('tel')} autoComplete="tel-national" placeholder="(44) 99999-9999" required />
          </Campo>
          <Campo id="ck-cpf" label={metodo === 'cartao' ? 'CPF' : 'CPF (opcional)'} erro={erros.cpf}>
            <input id="ck-cpf" inputMode="numeric" className={inputCls(erros.cpf)} value={form.cpf} onChange={set('cpf')} placeholder="000.000.000-00" />
          </Campo>
        </div>
        {/* Aviso do Núcleo fica abaixo dos campos para não deslocar o próximo campo ao aparecer. */}
        <div aria-live="polite">
          {membro === false && (
            <Aviso tipo="info">
              Ainda não encontramos uma conta no <strong>Núcleo</strong> com o e-mail <strong>{form.email.trim()}</strong>. Depois da compra,{' '}
              <a href={LINKS.NUCLEO} target="_blank" rel="noopener noreferrer" className="underline font-medium">cadastre-se no Núcleo</a>{' '}
              usando <strong>exatamente este e-mail</strong> para ter acesso a tudo o que você comprou dentro da comunidade.
            </Aviso>
          )}
          {membro === true && (
            <p className="text-sm text-primary dark:text-primary-dark inline-flex items-center gap-1"><Check className="h-4 w-4" /> Conta do Núcleo encontrada — o acesso será liberado nela.</p>
          )}
        </div>
        <div className="space-y-2 text-sm text-foreground/80 dark:text-foreground-dark/80">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} className="h-4 w-4 accent-primary" />
            Lembrar meus dados neste dispositivo
          </label>
          {lembrar && form.cpf && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={lembrarCpf} onChange={(e) => setLembrarCpf(e.target.checked)} className="h-4 w-4 accent-primary" />
              Lembrar também o CPF
            </label>
          )}
        </div>
      </section>

      {/* Pagamento */}
      <section className="space-y-3">
        <h2 className="text-lg font-serif font-bold">Pagamento</h2>
        <div className={`grid gap-3 ${produto.metodos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`} role="radiogroup">
          {produto.metodos.includes('pix') && (
            <MetodoBtn ativo={metodo === 'pix'} onClick={() => setMetodo('pix')} icon={QrCode} titulo="PIX" sub={`À vista · ${formatBRL(liquido)}`} />
          )}
          {produto.metodos.includes('cartao') && (
            <MetodoBtn ativo={metodo === 'cartao'} onClick={() => setMetodo('cartao')} icon={CreditCard} titulo="Cartão de crédito"
              sub={simulacao.length > 1 ? `Em até ${simulacao.length}x` : 'À vista'} />
          )}
        </div>
        {metodo === 'cartao' && simulacao.length > 0 && (
          <Campo id="ck-parcelas" label="Parcelas">
            <select id="ck-parcelas" className={inputCls()} value={parcelas} onChange={(e) => setParcelas(Number(e.target.value))}>
              {simulacao.map((s) => <option key={s.parcelas} value={s.parcelas}>{parcelaLabel(s)}</option>)}
            </select>
          </Campo>
        )}
        <p className="text-xs text-foreground/60 dark:text-foreground-dark/60">
          {metodo === 'pix'
            ? 'Geramos o QR Code na próxima tela. O acesso é liberado assim que conferirmos o pagamento.'
            : 'Você vai para a página segura do Asaas para digitar os dados do cartão. Parcelado com acréscimo da operadora.'}
        </p>
      </section>

      {/* Cupom */}
      <section>
        {!cupom && !cupomAberto && (
          <button type="button" onClick={() => setCupomAberto(true)} className="text-sm text-accent dark:text-accent-dark hover:underline inline-flex items-center gap-1">
            <Tag className="h-4 w-4" /> Tenho um cupom
          </button>
        )}
        {!cupom && cupomAberto && (
          <Campo id="ck-cupom" label="Cupom de desconto" erro={cupomErr}>
            <div className="flex gap-2">
              <input id="ck-cupom" className={`${inputCls(cupomErr)} uppercase`} value={cupomInput} maxLength={30} autoFocus={!cupomInicial}
                onChange={(e) => { setCupomInput(e.target.value); setCupomErr(''); }}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); aplicarCupom(cupomInput); } }} />
              <Button type="button" variant="outline" onClick={() => aplicarCupom(cupomInput)} disabled={cupomLoading || !cupomInput.trim()} className="h-auto">
                {cupomLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Aplicar'}
              </Button>
            </div>
          </Campo>
        )}
      </section>

      <Turnstile key={tsKey} onToken={(t) => { setToken(t); if (t) setTsFalhou(false); }} onError={() => setTsFalhou(true)} />

      {erroGeral && <Aviso tipo="erro">{erroGeral}</Aviso>}

      <Button type="submit" variant="cta" size="xl" className="w-full hover:scale-100" disabled={enviando}>
        {enviando ? <><Loader2 className="h-5 w-5 animate-spin" /> Processando…</>
          : metodo === 'pix' ? `Gerar PIX de ${formatBRL(total)}` : `Pagar ${formatBRL(total)} no cartão`}
      </Button>
    </form>
  );
}
Formulario.propTypes = { slug: PropTypes.string, produto: PropTypes.object, cupomInicial: PropTypes.string, onPix: PropTypes.func };

function MetodoBtn({ ativo, onClick, icon, titulo, sub }) {
  const Icon = icon;
  return (
    <button type="button" role="radio" aria-checked={ativo} onClick={onClick}
      className={`text-left rounded-lg border-2 p-4 transition-colors ${ativo
        ? 'border-primary bg-primary/5 dark:border-primary-dark dark:bg-primary-dark/10'
        : 'border-foreground/10 dark:border-foreground-dark/15 hover:border-primary/40'}`}>
      <Icon className={`h-5 w-5 mb-2 ${ativo ? 'text-primary dark:text-primary-dark' : 'text-foreground/50 dark:text-foreground-dark/50'}`} />
      <p className="font-semibold text-foreground dark:text-foreground-dark">{titulo}</p>
      <p className="text-sm text-foreground/60 dark:text-foreground-dark/60">{sub}</p>
    </button>
  );
}
MetodoBtn.propTypes = { ativo: PropTypes.bool, onClick: PropTypes.func, icon: PropTypes.elementType, titulo: PropTypes.string, sub: PropTypes.string };

// ============================================================== tela do PIX
function PixPagamento({ slug, produto, pedido, onNovo }) {
  const [qr, setQr] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [avisou, setAvisou] = useState(false);
  const [avisando, setAvisando] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { if (status?.pago) clearPendingPix(slug); }, [status, slug]);

  useEffect(() => {
    QRCode.toDataURL(pedido.payload, { margin: 1, width: 260, errorCorrectionLevel: 'M' }).then(setQr).catch(() => setQr(''));
  }, [pedido.payload]);

  // Acompanha a confirmação (conferência manual): consulta a cada 20s com a aba visível.
  useEffect(() => {
    let vivo = true;
    const tick = () => {
      if (document.visibilityState !== 'visible') return;
      api.status(pedido.orderId).then((s) => vivo && setStatus(s)).catch(() => {});
    };
    tick();
    const t = setInterval(tick, 20000);
    return () => { vivo = false; clearInterval(t); };
  }, [pedido.orderId]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(pedido.payload);
    } catch {
      const ta = document.getElementById('ck-pix-payload');
      ta?.select();
      document.execCommand?.('copy');
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const jaPaguei = async () => {
    setAvisando(true);
    try { await api.jaPaguei(pedido.orderId); } catch { /* idempotente; não bloqueia a pessoa */ }
    setAvisou(true);
    setAvisando(false);
  };

  if (status?.pago) {
    return (
      <div className="space-y-4 text-center py-8">
        <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center"><Check className="h-8 w-8 text-primary dark:text-primary-dark" /></div>
        <h1 className="text-2xl font-serif font-bold">Pagamento confirmado!</h1>
        <p className="text-foreground/80 dark:text-foreground-dark/80">
          {status.liberado ? 'Seu acesso já foi liberado.' : 'Estamos liberando seu acesso — leva poucos minutos.'} Você vai receber um e-mail em <strong>{pedido.email}</strong>.
        </p>
        <Button variant="outline" asChild className="dark:border-primary-dark dark:text-primary-dark"><a href={LINKS.NUCLEO}>Ir para o Núcleo</a></Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="text-center">
        <p className="text-xs uppercase tracking-wide text-foreground/60 dark:text-foreground-dark/60 mb-1">{produto.nome}</p>
        <h1 className="text-2xl font-serif font-bold">Pague com PIX</h1>
        <p className="mt-2 text-3xl font-semibold text-foreground dark:text-foreground-dark" data-testid="pix-total">{formatBRL(pedido.totalCents)}</p>
      </section>

      <div className="mx-auto w-[260px] h-[260px] rounded-lg bg-white p-2 shadow-sm flex items-center justify-center">
        {qr ? <img src={qr} alt="QR Code PIX" width={244} height={244} /> : <Loader2 className="h-6 w-6 animate-spin text-foreground/40" />}
      </div>

      <div>
        <label htmlFor="ck-pix-payload" className="block text-sm font-medium mb-1.5 text-foreground/80 dark:text-foreground-dark/80">PIX copia e cola</label>
        <textarea id="ck-pix-payload" readOnly rows={3} value={pedido.payload} onFocus={(e) => e.target.select()}
          className={`${inputCls()} font-mono text-xs break-all resize-none`} />
        <Button type="button" variant="default" size="lg" className="w-full mt-2" onClick={copiar}>
          {copiado ? <><Check className="h-4 w-4" /> Copiado!</> : <><Copy className="h-4 w-4" /> Copiar código</>}
        </Button>
      </div>

      <ol className="text-sm space-y-1.5 text-foreground/80 dark:text-foreground-dark/80 list-decimal list-inside">
        <li>Abra o app do seu banco e escolha <strong>PIX → Ler QR Code</strong> ou <strong>Copia e cola</strong>.</li>
        <li>Confira o recebedor: <strong>{pedido.recebedor}</strong> e o valor de <strong>{formatBRL(pedido.totalCents)}</strong>.</li>
        <li>Depois de pagar, toque em <strong>Já paguei</strong>. Liberamos o acesso assim que o pagamento for conferido.</li>
      </ol>

      {pedido.membro === false && (
        <Aviso tipo="info" titulo="Crie sua conta no Núcleo">
          Para usar tudo dentro da comunidade, <a href={LINKS.NUCLEO} target="_blank" rel="noopener noreferrer" className="underline font-medium">cadastre-se no Núcleo</a> com o e-mail <strong>{pedido.email}</strong>.
        </Aviso>
      )}

      {avisou ? (
        <Aviso tipo="ok" titulo="Recebemos seu aviso!">
          Vamos conferir o pagamento e liberar seu acesso. Você recebe a confirmação em <strong>{pedido.email}</strong>. Pode fechar esta página.
        </Aviso>
      ) : (
        <Button type="button" variant="cta" size="xl" className="w-full hover:scale-100" onClick={jaPaguei} disabled={avisando}>
          {avisando ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Já paguei'}
        </Button>
      )}

      <p className="text-center text-xs text-foreground/50 dark:text-foreground-dark/50">
        Pedido <span className="font-mono">{pedido.orderId.slice(0, 8)}</span> ·{' '}
        <button type="button" className="underline hover:text-foreground" onClick={onNovo}>fazer um novo pedido</button>
      </p>
    </div>
  );
}
PixPagamento.propTypes = { slug: PropTypes.string, produto: PropTypes.object, pedido: PropTypes.object, onNovo: PropTypes.func };
