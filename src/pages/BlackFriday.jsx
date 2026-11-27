import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Check, Loader2, ShoppingCart, Tag, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useNoIndex from '@/hooks/useNoIndex';
import { Aviso, Formulario, PixPagamento } from '@/components/checkout/CheckoutParts';
import {
  api, formatBRL, loadCarrinho, saveCarrinho, toggleItem, totalCarrinho, clearPendingPix, loadPendingPix,
} from '@/lib/checkout';

export const COLECAO = 'black-friday-2026';
const CUPOM_PADRAO = 'BLACKFRIDAY';
// Chave do PIX pendente do carrinho (mesma no formulário e na tela de PIX).
const SLUG_CARRINHO = 'carrinho-' + COLECAO;

function Card({ item, selecionado, onToggle }) {
  return (
    <li className={`rounded-lg border overflow-hidden flex flex-col transition-colors ${selecionado
      ? 'border-primary dark:border-primary-dark ring-2 ring-primary/30 dark:ring-primary-dark/30' : 'border-foreground/10 dark:border-foreground-dark/15'}`}>
      <div className="p-4 flex-1">
        <p className="text-xs uppercase tracking-wide text-foreground/70 dark:text-foreground-dark/70">{item.tipo}</p>
        <h3 className="mt-1 font-serif font-bold leading-snug text-foreground dark:text-foreground-dark">{item.nome}</h3>
        <p className="mt-2 text-sm text-foreground/75 dark:text-foreground-dark/75">{item.descricao}</p>
        <p className="mt-3 text-sm">
          <span className="line-through text-foreground/60 dark:text-foreground-dark/60">{formatBRL(item.precoCents)}</span>{' '}
          <span className="font-semibold text-primary dark:text-primary-dark">R$ 15,00</span>
        </p>
      </div>
      <div className="p-4 pt-0">
        <Button type="button" variant={selecionado ? 'outline' : 'default'} className="w-full h-auto py-2.5"
          onClick={() => onToggle(item.slug)} aria-pressed={selecionado}>
          {selecionado ? <><Check className="h-4 w-4" /> No carrinho · remover</> : <><ShoppingCart className="h-4 w-4" /> Adicionar</>}
        </Button>
      </div>
    </li>
  );
}
Card.propTypes = { item: PropTypes.object.isRequired, selecionado: PropTypes.bool, onToggle: PropTypes.func };

function Resumo({ itens, selecionados, cupomOk, cupomErr, total, onRemover, onFinalizar, onAdicionarTodos, disabled }) {
  const sel = itens.filter((i) => selecionados.includes(i.slug));
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-serif font-bold text-lg">Seu carrinho</h2>
        <span className="text-sm text-foreground/70 dark:text-foreground-dark/70">{sel.length} {sel.length === 1 ? 'lab' : 'labs'}</span>
      </div>
      {sel.length === 0 ? (
        <p className="text-sm text-foreground/70 dark:text-foreground-dark/70">Adicione os labs que quiser. Você paga todos de uma vez.</p>
      ) : (
        <ul className="space-y-1.5 text-sm max-h-48 overflow-auto">
          {sel.map((i) => (
            <li key={i.slug} className="flex items-center justify-between gap-2">
              <span className="truncate">{i.nome}</span>
              <button type="button" onClick={() => onRemover(i.slug)} aria-label={`Remover ${i.nome}`}
                className="shrink-0 text-foreground/60 hover:text-foreground dark:text-foreground-dark/60"><X className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center justify-between border-t border-foreground/10 dark:border-foreground-dark/15 pt-3 text-sm">
        <span className="text-foreground/70 dark:text-foreground-dark/70 inline-flex items-center gap-1"><Tag className="h-4 w-4" /> Cupom {CUPOM_PADRAO}</span>
        <span className={cupomOk ? 'text-primary dark:text-primary-dark font-medium' : 'text-foreground/60'}>{cupomOk ? 'aplicado' : cupomErr || '—'}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-foreground/70 dark:text-foreground-dark/70">Total</span>
        <span className="text-2xl font-semibold" data-testid="total-carrinho">{formatBRL(total)}</span>
      </div>
      <Button type="button" variant="cta" size="lg" className="w-full" disabled={disabled || sel.length === 0} onClick={onFinalizar}>
        Finalizar compra
      </Button>
      <button type="button" onClick={onAdicionarTodos} disabled={disabled}
        className="w-full text-sm text-accent dark:text-accent-dark hover:underline disabled:opacity-50">Adicionar todos</button>
    </div>
  );
}
Resumo.propTypes = {
  itens: PropTypes.array, selecionados: PropTypes.array, cupomOk: PropTypes.bool, cupomErr: PropTypes.string,
  total: PropTypes.number, onRemover: PropTypes.func, onFinalizar: PropTypes.func, onAdicionarTodos: PropTypes.func, disabled: PropTypes.bool,
};

export default function BlackFriday() {
  useNoIndex('Black Friday | NUNCA');
  const [searchParams] = useSearchParams();
  const [itens, setItens] = useState(null);
  const [erro, setErro] = useState('');
  const [selecionados, setSelecionados] = useState(() => loadCarrinho(COLECAO));
  const [finalizando, setFinalizando] = useState(false);
  const [pix, setPix] = useState(() => loadPendingPix(SLUG_CARRINHO));
  const cupom = (searchParams.get('cupom') || CUPOM_PADRAO).toUpperCase();

  useEffect(() => {
    let vivo = true;
    api.colecao(COLECAO)
      .then((r) => { if (vivo) setItens(r.itens || []); })
      .catch((e) => { if (vivo) setErro(e.message || 'Não foi possível carregar os labs.'); });
    return () => { vivo = false; };
  }, []);

  useEffect(() => { saveCarrinho(COLECAO, selecionados); }, [selecionados]);

  // Remove do carrinho o que saiu da coleção (ex.: lab inativado).
  useEffect(() => {
    if (!itens) return;
    const validos = new Set(itens.map((i) => i.slug));
    setSelecionados((s) => s.filter((x) => validos.has(x)));
  }, [itens]);

  const total = useMemo(() => (itens ? totalCarrinho(itens, selecionados).precoCents : 0), [itens, selecionados]);
  const encerrada = itens && itens.length === 0;

  const produto = useMemo(() => ({
    slug: 'carrinho',
    nome: `Carrinho · ${selecionados.length} ${selecionados.length === 1 ? 'lab' : 'labs'}`,
    precoCents: total,
    metodos: ['pix', 'cartao'],
    parcelas: [],
  }), [selecionados.length, total]);

  if (pix) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-background dark:bg-background-dark">
        <div className="max-w-xl mx-auto">
          <PixPagamento slug={SLUG_CARRINHO} produto={produto} pedido={pix}
            onNovo={() => { clearPendingPix(SLUG_CARRINHO); setPix(null); setFinalizando(false); }} />
        </div>
      </div>
    );
  }

  const cupomOk = cupom === CUPOM_PADRAO;
  const pendentes = selecionados.length > 0 && !cupomOk;

  return (
    <div className="min-h-screen pt-24 pb-28 lg:pb-16 px-4 sm:px-6 bg-background dark:bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-wide text-accent dark:text-accent-dark">Black Friday NUNCA</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark">
            Labs por R$ 15 cada
          </h1>
          <p className="mt-3 text-foreground/80 dark:text-foreground-dark/80">
            Monte seu carrinho com os labs que quiser e pague tudo de uma vez, por PIX ou cartão. Cada lab dá acesso aos materiais
            por 30 dias a partir da compra; o online inclui a gravação.
          </p>
          <p className="mt-2 text-sm text-foreground/70 dark:text-foreground-dark/70">Promoção válida até 30/11/2026.</p>
        </header>

        {erro && <Aviso tipo="erro">{erro}</Aviso>}
        {!itens && !erro && (
          <div className="flex items-center justify-center py-24 text-foreground/70 dark:text-foreground-dark/70" aria-live="polite">
            <Loader2 className="h-6 w-6 animate-spin mr-2" /> Carregando os labs…
          </div>
        )}
        {encerrada && <Aviso tipo="info" titulo="A Black Friday acabou">Obrigado por participar. Fique de olho nos próximos labs.</Aviso>}
        {pendentes && (
          <div className="mb-4"><Aviso tipo="info">Cupom {cupom} não está ativo. Os labs aparecem pelo preço cheio.</Aviso></div>
        )}

        {itens && itens.length > 0 && (
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            <ul className="grid sm:grid-cols-2 gap-4">
              {itens.map((it) => (
                <Card key={it.slug} item={{ ...it, tipo: it.slug.includes('online') ? 'LAB Online' : 'LAB Presencial', descricao: it.slug.includes('online') ? 'Materiais + gravação por 30 dias' : 'Materiais por 30 dias' }}
                  selecionado={selecionados.includes(it.slug)}
                  onToggle={(s) => setSelecionados((x) => toggleItem(x, s))} />
              ))}
            </ul>

            <aside className="hidden lg:block sticky top-28 rounded-lg border border-foreground/10 dark:border-foreground-dark/15 p-5 bg-muted dark:bg-muted-dark">
              {!finalizando ? (
                <Resumo itens={itens} selecionados={selecionados} cupomOk={cupomOk} total={total}
                  onRemover={(s) => setSelecionados((x) => x.filter((y) => y !== s))}
                  onFinalizar={() => setFinalizando(true)}
                  onAdicionarTodos={() => setSelecionados(itens.map((i) => i.slug))} />
              ) : (
                <FinalizarBox produto={produto} slugs={selecionados} onPix={setPix} />
              )}
            </aside>
          </div>
        )}
      </div>

      {/* Barra inferior no celular */}
      {itens && itens.length > 0 && !finalizando && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-foreground/10 dark:border-foreground-dark/15 bg-background/95 dark:bg-background-dark/95 backdrop-blur px-4 py-3 flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-foreground/70 dark:text-foreground-dark/70">{selecionados.length} {selecionados.length === 1 ? 'lab' : 'labs'}</p>
            <p className="font-semibold" data-testid="total-carrinho-mobile">{formatBRL(total)}</p>
          </div>
          <Button type="button" variant="cta" disabled={selecionados.length === 0} onClick={() => setFinalizando(true)}>Finalizar</Button>
        </div>
      )}
      {itens && itens.length > 0 && finalizando && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-auto bg-background dark:bg-background-dark px-4 py-6">
          <button type="button" onClick={() => setFinalizando(false)} className="mb-4 text-sm text-accent dark:text-accent-dark hover:underline">← Voltar ao carrinho</button>
          <FinalizarBox produto={produto} slugs={selecionados} onPix={setPix} />
        </div>
      )}
    </div>
  );
}

// Finalização: reusa o formulário do checkout com os itens do carrinho.
function FinalizarBox({ produto, slugs, onPix }) {
  return (
    <div className="space-y-4">
      <Formulario slug={SLUG_CARRINHO} itens={slugs} produto={produto} cupomInicial={CUPOM_PADRAO} onPix={onPix} />
    </div>
  );
}
FinalizarBox.propTypes = { produto: PropTypes.object, slugs: PropTypes.array, onPix: PropTypes.func };
