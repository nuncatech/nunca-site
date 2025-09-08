import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'nunca-theme';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
    const themeColor = theme === 'dark' ? '#0e0f0a' : '#fbf6f3';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', themeColor);

    // Update favicon and apple touch icon based on theme
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.setAttribute('href', theme === 'dark' ? '/nunca-icon-dark.png' : '/nunca-icon-light.png');
    }
    const apple = document.getElementById('apple-touch-icon');
    if (apple) {
      apple.setAttribute('href', theme === 'dark' ? '/nunca-icon-dark.png' : '/nunca-icon-light.png');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;


