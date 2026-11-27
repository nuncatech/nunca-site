import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Loader2, Lock } from 'lucide-react';
import useNoIndex from '@/hooks/useNoIndex';
import { Aviso, Formulario, PixPagamento } from '@/components/checkout/CheckoutParts';
import { api, loadPendingPix, clearPendingPix } from '@/lib/checkout';

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
          <div className="flex items-center justify-center py-24 text-foreground/70 dark:text-foreground-dark/70" aria-live="polite">
            <Loader2 className="h-6 w-6 animate-spin mr-2" /> Carregando…
          </div>
        ) : pix ? (
          <PixPagamento slug={slug} produto={produto} pedido={pix} onNovo={() => { clearPendingPix(slug); setPix(null); }} />
        ) : (
          <Formulario slug={slug} produto={produto} cupomInicial={searchParams.get('cupom') || ''} onPix={setPix} />
        )}
        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-foreground/65 dark:text-foreground-dark/65">
          <Lock className="h-3.5 w-3.5" /> Pagamento seguro · dados do cartão digitados só no ambiente do Asaas
        </p>
      </div>
    </div>
  );
}
