import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Check, Copy, CreditCard, ExternalLink, Loader2, QrCode, AlertCircle } from 'lucide-react';
import useNoIndex from '@/hooks/useNoIndex';
import { api, formatBRL } from '@/lib/checkout';

/**
 * Página interna (sem link no site): lista as páginas de pagamento para testar e compartilhar.
 * Nome, preço e métodos vêm ao vivo do n8n (aba `produtos` da planilha "NUNCA – Checkout").
 * Produto novo na planilha → adicionar o slug aqui.
 */
const PRODUTOS = [
  'nutricao-precisao',
  'antropo-360',
  'imersao-nutricao-bariatrica',
  'imersao-nutricao-bariatrica-promo',
  'laminas-atendimento-bariatrico',
  'master-class-endurance-capelato',
  'master-class-glp1-capelato',
];
const TESTES = ['teste-checkout', 'teste-checkout-cartao'];

const urlDe = (slug) => `${window.location.origin}/checkout/${slug}`;

function Metodo({ metodo }) {
  const pix = metodo === 'pix';
  const Icon = pix ? QrCode : CreditCard;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-foreground/15 dark:border-foreground-dark/20 px-2 py-0.5 text-xs text-foreground/70 dark:text-foreground-dark/70">
      <Icon className="h-3 w-3" /> {pix ? 'PIX' : 'Cartão'}
    </span>
  );
}
Metodo.propTypes = { metodo: PropTypes.string };

function Cartao({ slug }) {
  const [p, setP] = useState(null);
  const [erro, setErro] = useState('');
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    let vivo = true;
    api.produto(slug)
      .then((r) => vivo && setP(r))
      .catch((e) => vivo && setErro(e.status === 404 || e.status === 400 ? 'Inativo ou não encontrado' : e.message));
    return () => { vivo = false; };
  }, [slug]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(urlDe(slug));
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch { /* clipboard bloqueado: o link continua visível */ }
  };

  return (
    <li className="rounded-lg border border-foreground/10 dark:border-foreground-dark/15 bg-white/60 dark:bg-white/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-semibold leading-snug text-foreground dark:text-foreground-dark">
            {p ? p.nome : erro ? slug : <span className="inline-flex items-center gap-1.5 font-normal text-foreground/65 dark:text-foreground-dark/65"><Loader2 className="h-4 w-4 animate-spin" /> {slug}</span>}
          </p>
          <p className="mt-0.5 text-xs text-foreground/65 dark:text-foreground-dark/65 break-all">/checkout/{slug}</p>
        </div>
        {p && <p className="shrink-0 font-semibold text-primary dark:text-primary-dark">{formatBRL(p.precoCents)}</p>}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {p?.metodos?.map((m) => <Metodo key={m} metodo={m} />)}
        {erro && (
          <span className="inline-flex items-center gap-1 text-xs text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5" /> {erro}</span>
        )}
        <div className="ml-auto flex gap-2">
          <button type="button" onClick={copiar}
            className="inline-flex items-center gap-1.5 rounded-md border border-foreground/15 dark:border-foreground-dark/20 px-3 py-1.5 text-sm hover:bg-foreground/5 dark:hover:bg-white/10 transition-colors">
            {copiado ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copiado ? 'Copiado' : 'Copiar link'}
          </button>
          <Link to={`/checkout/${slug}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-cta px-3 py-1.5 text-sm font-medium text-cta-foreground hover:bg-cta/90 transition-opacity">
            <ExternalLink className="h-4 w-4" /> Abrir
          </Link>
        </div>
      </div>
    </li>
  );
}
Cartao.propTypes = { slug: PropTypes.string.isRequired };

function Secao({ titulo, dica, slugs }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-serif font-bold text-foreground dark:text-foreground-dark">{titulo}</h2>
      {dica && <p className="mt-1 text-sm text-foreground/70 dark:text-foreground-dark/70">{dica}</p>}
      <ul className="mt-4 space-y-3">{slugs.map((s) => <Cartao key={s} slug={s} />)}</ul>
    </section>
  );
}
Secao.propTypes = { titulo: PropTypes.string, dica: PropTypes.string, slugs: PropTypes.arrayOf(PropTypes.string) };

export default function Pagamentos() {
  useNoIndex('Páginas de pagamento | NUNCA');
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-background dark:bg-background-dark">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-primary dark:text-primary-dark">Páginas de pagamento</h1>
        <p className="mt-2 text-sm text-foreground/70 dark:text-foreground-dark/70">
          Uso interno: links do checkout próprio para testar e compartilhar. Preço e métodos vêm ao vivo da planilha de produtos.
          Para aplicar cupom no link, adicione <code className="px-1 rounded bg-foreground/5">?cupom=CODIGO</code>.
        </p>
        <Secao titulo="Produtos" slugs={PRODUTOS} />
        <section className="mt-10">
          <h2 className="text-lg font-serif font-bold text-foreground dark:text-foreground-dark">Carrinho da Black Friday</h2>
          <p className="mt-1 text-sm text-foreground/60 dark:text-foreground-dark/60">Vários labs num pagamento só. Link para compartilhar:</p>
          <p className="mt-3"><Link to="/black-friday" className="text-accent dark:text-accent-dark underline">/black-friday</Link></p>
        </section>
        <Secao titulo="Testes" dica="Não divulgar. PIX de R$ 1 e cartão de R$ 5, para testar o fluxo ponta a ponta." slugs={TESTES} />
      </div>
    </div>
  );
}
