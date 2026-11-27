import { useLocation } from 'react-router-dom';
import { BF_NO_AR } from '@/data/blackFriday';

// Regra da faixa da Black Friday, num lugar só: aparece em todo o site enquanto a campanha
// estiver ligada (`BF_NO_AR`) e antes do fim, menos nas páginas de compra (para não competir
// com o carrinho). O Header usa o mesmo hook para descer a barra de navegação.
const FIM = new Date('2026-11-30T23:59:59-03:00');
const ESCONDER_EM = ['/black-friday'];
// Altura da faixa (h-9 = 36px): o Header e o conteúdo descem essa medida (top-9 / pt-9).

export default function useBannerBlackFriday() {
  const { pathname } = useLocation();
  if (!BF_NO_AR || Date.now() > FIM.getTime()) return false;
  return !(ESCONDER_EM.includes(pathname) || pathname.startsWith('/checkout/'));
}
