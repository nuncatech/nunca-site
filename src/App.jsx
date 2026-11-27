import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Favos from './pages/Favos';
// import Capsulas from './pages/Capsulas';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Links from './pages/Links';
import AppRedirect from './pages/AppRedirect';
import Checkout from './pages/Checkout';
import Pagamentos from './pages/Pagamentos';
import BlackFriday from './pages/BlackFriday';
import BannerBlackFriday from './components/BannerBlackFriday';
import useBannerBlackFriday from './hooks/useBannerBlackFriday';

// Layout dentro do Router para saber se a faixa da Black Friday está na tela:
// quando está, Header e conteúdo descem a altura dela (a faixa é fixa no topo).
function Layout() {
  const faixaBF = useBannerBlackFriday();
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark transition-colors duration-300">
      <BannerBlackFriday />
      <Header />
      <main className={faixaBF ? 'flex-grow pt-9' : 'flex-grow'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/favos" element={<Favos />} />
          {/* <Route path="/capsulas" element={<Capsulas />} /> */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/links" element={<Links />} />
          <Route path="/app" element={<AppRedirect />} />
          <Route path="/checkout/:slug" element={<Checkout />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/black-friday" element={<BlackFriday />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;