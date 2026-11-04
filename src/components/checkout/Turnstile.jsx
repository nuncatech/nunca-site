import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TURNSTILE_SITE_KEY, TURNSTILE_TEST_KEY } from '@/lib/checkout';

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let scriptPromise;

function loadScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      s.defer = true;
      s.onload = () => resolve(window.turnstile);
      s.onerror = () => { scriptPromise = null; reject(new Error('turnstile')); };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

const isLocal = () => ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);

/** Widget anti-robô. Token é de uso único: para pedir outro, remonte com uma nova `key`. */
export default function Turnstile({ onToken, onError }) {
  const ref = useRef(null);
  const cb = useRef({ onToken, onError });
  cb.current = { onToken, onError };

  useEffect(() => {
    let widgetId;
    let cancelled = false;
    loadScript()
      .then((ts) => {
        if (cancelled || !ref.current) return;
        widgetId = ts.render(ref.current, {
          sitekey: isLocal() ? TURNSTILE_TEST_KEY : TURNSTILE_SITE_KEY,
          language: 'pt-br',
          appearance: 'interaction-only',
          callback: (t) => cb.current.onToken(t),
          'expired-callback': () => cb.current.onToken(''),
          'error-callback': () => { cb.current.onToken(''); cb.current.onError?.(); },
        });
      })
      .catch(() => cb.current.onError?.());
    return () => {
      cancelled = true;
      if (widgetId !== undefined && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, []);

  return <div ref={ref} className="min-h-0" data-testid="turnstile" />;
}

Turnstile.propTypes = {
  onToken: PropTypes.func.isRequired,
  onError: PropTypes.func,
};
