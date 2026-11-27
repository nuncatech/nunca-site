import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import useBannerBlackFriday from '@/hooks/useBannerBlackFriday';

// Faixa da Black Friday no topo do site. Some sozinha depois de 30/11/2026 23:59 (horário de Brasília)
// e não aparece nas páginas de compra (/black-friday e /checkout), para não competir com o carrinho.
// A regra fica em useBannerBlackFriday, compartilhada com o Header e com o layout.
export default function BannerBlackFriday() {
  if (!useBannerBlackFriday()) return null;
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-9 flex items-center bg-cta text-cta-foreground text-sm">
      <Link to="/black-friday" className="flex w-full items-center justify-center gap-2 px-4 font-medium hover:underline">
        <Tag className="h-4 w-4" aria-hidden="true" /> Black Friday NUNCA: labs por R$ 15 cada · até 30/11
      </Link>
    </div>
  );
}
