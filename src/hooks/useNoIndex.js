import { useEffect } from 'react';

// Define o título e marca a página como noindex/nofollow enquanto estiver montada.
export default function useNoIndex(title) {
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
