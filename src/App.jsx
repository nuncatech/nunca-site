import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Colmeia from './pages/Colmeia';
import Favos from './pages/Favos';
import Capsulas from './pages/Capsulas';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/colmeia" element={<Colmeia />} />
              <Route path="/favos" element={<Favos />} />
              <Route path="/capsulas" element={<Capsulas />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;