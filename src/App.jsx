import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Raiz from './pages/Raiz';
import Aurora from './pages/Aurora';
import Nucleo from './pages/Nucleo';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/raiz" element={<Raiz />} />
            <Route path="/aurora" element={<Aurora />} />
            <Route path="/nucleo" element={<Nucleo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;