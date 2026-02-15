import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary-dark text-primary-foreground dark:text-foreground-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <img
              src="/imagens_nunca/tag_nunca_sem_fundo.png"
              alt="NUNCA"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 max-w-md mb-6">
              Integração entre estudantes e profissionais da área da saúde.
              Transformando barreiras em pontes.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nunca.nutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 dark:bg-foreground-dark/10 hover:bg-cta rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="mailto:contato@gruponunca.com.br"
                className="w-10 h-10 bg-primary-foreground/10 dark:bg-foreground-dark/10 hover:bg-cta rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors">
                  LAB
                </Link>
              </li>
              <li>
                <Link to="/colmeia" className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors">
                  Colmeia
                </Link>
              </li>
              <li>
                <Link to="/favos" className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors">
                  Favos
                </Link>
              </li>
              <li>
                <Link to="/capsulas" className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors">
                  Cápsulas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:contato@gruponunca.com.br"
                  className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors break-all"
                >
                  contato@gruponunca.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-cta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  href="https://www.instagram.com/nunca.nutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 dark:text-foreground-dark/80 hover:text-cta transition-colors"
                >
                  @nunca.nutri
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 dark:border-foreground-dark/20">
          <p className="text-center text-sm text-primary-foreground/60 dark:text-foreground-dark/60">
            © {new Date().getFullYear()} NUNCA - Núcleo de Nutrição, Clínica e Atualização.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
