import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/logo-nunca.svg" alt="NUNCA - Núcleo de Nutrição" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/')}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Frentes Formativas
                  <span className="dropdown-arrow">▼</span>
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                  <li>
                    <Link 
                      to="/lab" 
                      className={`dropdown-link ${isActive('/lab')}`}
                      onClick={closeMenu}
                    >
                      LAB
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/raiz" 
                      className={`dropdown-link ${isActive('/raiz')}`}
                      onClick={closeMenu}
                    >
                      Raiz
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/aurora" 
                      className={`dropdown-link ${isActive('/aurora')}`}
                      onClick={closeMenu}
                    >
                      Aurora
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/nucleo" 
                      className={`dropdown-link ${isActive('/nucleo')}`}
                      onClick={closeMenu}
                    >
                      Núcleo
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/sobre" 
                  className={`nav-link ${isActive('/sobre')}`}
                  onClick={closeMenu}
                >
                  Sobre Nós
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/contato" 
                  className={`nav-link ${isActive('/contato')}`}
                  onClick={closeMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
