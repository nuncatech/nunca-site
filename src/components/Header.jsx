import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useTheme } from './ThemeContext.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
            <img src={theme === 'dark' ? '/logo-nunca-dark.png' : '/logo-nunca.svg'} alt="NUNCA - Núcleo de Nutrição" />
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

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            title={theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
            <span>{theme === 'dark' ? 'Escuro' : 'Claro'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
