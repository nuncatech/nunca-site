import './Contato.css';

const Contato = () => {
  return (
    <div className="contato-page">
      {/* Hero Section */}
      <section className="contato-hero">
        <div className="container">
          <div className="contato-hero-content">
            <h1>Contato</h1>
            <p className="contato-subtitle">
              Vamos abrir mais portas juntos? Entre em contato conosco
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section contato-info">
        <div className="container">
          <div className="contato-content">
            <div className="contato-principal">
              <h2>Fale Conosco</h2>
              <p>
                Estamos sempre prontos para conversar sobre nutrição, educação 
                e oportunidades de colaboração. Entre em contato através dos 
                nossos canais oficiais.
              </p>

              <div className="contato-cards">
                <div className="contato-card">
                  <div className="contato-icon">📧</div>
                  <h3>E-mail</h3>
                  <p>Para dúvidas, informações e parcerias</p>
                  <a href="mailto:nuncanutricao@gmail.com" className="contato-link">
                    nuncanutricao@gmail.com
                  </a>
                </div>

                <div className="contato-card">
                  <div className="contato-icon">📱</div>
                  <h3>Telefone</h3>
                  <p>Atendimento telefônico personalizado</p>
                  <a href="tel:+5511999999999" className="contato-link">
                    (11) 99999-9999
                  </a>
                </div>

                <div className="contato-card">
                  <div className="contato-icon">📷</div>
                  <h3>Instagram</h3>
                  <p>Acompanhe nosso dia a dia e novidades</p>
                  <a 
                    href="https://www.instagram.com/nunca.nutricao/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contato-link"
                  >
                    @nunca.nutricao
                  </a>
                </div>

                <div className="contato-card">
                  <div className="contato-icon">📝</div>
                  <h3>Notion</h3>
                  <p>Acesse nosso conteúdo e materiais</p>
                  <a 
                    href="https://nuncanutri.notion.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contato-link"
                  >
                    nuncanutri.notion.site
                  </a>
                </div>
              </div>
            </div>

            <div className="contato-formulario">
              <div className="formulario-card">
                <h3>Envie sua Mensagem</h3>
                <p>
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>

                <form className="contato-form">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      required 
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone (opcional)</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone" 
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="assunto">Assunto</label>
                    <select id="assunto" name="assunto" required>
                      <option value="">Selecione um assunto</option>
                      <option value="informacoes-cursos">Informações sobre Cursos</option>
                      <option value="consulta-clinica">Consulta Clínica</option>
                      <option value="parcerias">Parcerias e Colaborações</option>
                      <option value="pesquisa">Pesquisa e LAB</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea 
                      id="mensagem" 
                      name="mensagem" 
                      rows="5" 
                      required 
                      placeholder="Conte-nos como podemos ajudá-lo..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Oportunidades */}
      <section className="section oportunidades">
        <div className="container">
          <div className="oportunidades-content">
            <h2 className="text-center">Oportunidades de Colaboração</h2>
            <p className="text-center section-subtitle">
              Descubra as diferentes formas de fazer parte do NUNCA
            </p>

            <div className="grid grid-2 oportunidades-grid">
              <div className="oportunidade-card">
                <h3>Para Estudantes</h3>
                <ul>
                  <li>Programas de formação Raiz</li>
                  <li>Estágios supervisionados no Núcleo</li>
                  <li>Participação em projetos de pesquisa</li>
                  <li>Mentoria profissional</li>
                </ul>
                <a href="mailto:nuncanutricao@gmail.com?subject=Oportunidades para Estudantes" 
                   className="btn btn-secondary">
                  Saiba mais
                </a>
              </div>

              <div className="oportunidade-card">
                <h3>Para Profissionais</h3>
                <ul>
                  <li>Cursos de especialização Aurora</li>
                  <li>Colaboração em pesquisas</li>
                  <li>Supervisão clínica</li>
                  <li>Networking profissional</li>
                </ul>
                <a href="mailto:nuncanutricao@gmail.com?subject=Oportunidades para Profissionais" 
                   className="btn btn-secondary">
                  Saiba mais
                </a>
              </div>

              <div className="oportunidade-card">
                <h3>Para Instituições</h3>
                <ul>
                  <li>Parcerias educacionais</li>
                  <li>Projetos de pesquisa colaborativa</li>
                  <li>Consultoria especializada</li>
                  <li>Desenvolvimento de protocolos</li>
                </ul>
                <a href="mailto:nuncanutricao@gmail.com?subject=Parcerias Institucionais" 
                   className="btn btn-secondary">
                  Saiba mais
                </a>
              </div>

              <div className="oportunidade-card">
                <h3>Para Pacientes</h3>
                <ul>
                  <li>Consultas nutricionais individualizadas</li>
                  <li>Acompanhamento continuado</li>
                  <li>Abordagem humanizada</li>
                  <li>Cuidado baseado em evidências</li>
                </ul>
                <a href="mailto:nuncanutricao@gmail.com?subject=Agendamento de Consulta" 
                   className="btn btn-secondary">
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-contato">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Vamos abrir mais portas juntos?</h2>
            <p>
              Seja qual for sua necessidade ou interesse, estamos aqui para 
              construir pontes e nutrir conexões significativas.
            </p>
            <div className="cta-buttons">
              <a href="mailto:nuncanutricao@gmail.com" className="btn btn-primary">
                Enviar e-mail
              </a>
              <a href="https://www.instagram.com/nunca.nutricao/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-secondary">
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
