import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo-nunca.svg" alt="NUNCA - Núcleo de Nutrição" />
              <p className="footer-description">
                Um Núcleo de Nutrição, Clínica e Atualização criado para transformar 
                barreiras em pontes e nutrir o que realmente importa.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Frentes Formativas</h4>
            <ul className="footer-links">
              <li><Link to="/lab">LAB</Link></li>
              <li><Link to="/raiz">Raiz</Link></li>
              <li><Link to="/aurora">Aurora</Link></li>
              <li><Link to="/nucleo">Núcleo</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>
                <strong>E-mail:</strong><br />
                <a href="mailto:nuncanutricao@gmail.com">nuncanutricao@gmail.com</a>
              </p>
              <p>
                <strong>Telefone:</strong><br />
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </p>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/nunca.nutricao/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram NUNCA"
                >
                  Instagram
                </a>
                <a 
                  href="https://nuncanutri.notion.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Notion NUNCA"
                >
                  Notion
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 NUNCA - Núcleo de Nutrição, Clínica e Atualização. Todos os direitos reservados.</p>
            <p className="footer-cta">Vamos abrir mais portas juntos?</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
