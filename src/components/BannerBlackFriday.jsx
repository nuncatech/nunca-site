import { Link, useLocation } from 'react-router-dom';
import { Tag } from 'lucide-react';

// Faixa da Black Friday no topo do site. Some sozinha depois de 30/11/2026 23:59 (horário de Brasília)
// e não aparece nas páginas de compra (/black-friday e /checkout), para não competir com o carrinho.
const FIM = new Date('2026-11-30T23:59:59-03:00');
const ESCONDER_EM = ['/black-friday'];

export default function BannerBlackFriday() {
  const { pathname } = useLocation();
  if (Date.now() > FIM.getTime()) return null;
  if (ESCONDER_EM.includes(pathname) || pathname.startsWith('/checkout/')) return null;
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-cta text-cta-foreground text-sm">
      <Link to="/black-friday" className="flex items-center justify-center gap-2 px-4 py-2 font-medium hover:underline">
        <Tag className="h-4 w-4" aria-hidden="true" /> Black Friday NUNCA: labs por R$ 15 cada · até 30/11
      </Link>
    </div>
  );
}
