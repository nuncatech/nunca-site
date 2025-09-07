import './FrenteFormativa.css';

const Aurora = () => {
  return (
    <div className="frente-page">
      {/* Hero Section */}
      <section className="frente-hero aurora-hero">
        <div className="container">
          <div className="frente-hero-content">
            <h1>Aurora</h1>
            <p className="frente-subtitle">
              Especialização e Aperfeiçoamento Profissional
            </p>
            <p className="frente-description">
              Cursos avançados e especializações para profissionais que desejam 
              expandir seus conhecimentos e se destacar em áreas específicas da 
              nutrição, iluminando novos caminhos profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section">
        <div className="container">
          <div className="frente-content">
            <div className="content-section">
              <h2>O que é o Aurora?</h2>
              <p>
                O Aurora representa o despertar de novas possibilidades profissionais. 
                É nossa frente dedicada à especialização e ao aperfeiçoamento de 
                profissionais que já possuem uma base sólida e desejam se aprofundar 
                em áreas específicas da nutrição.
              </p>
              <p>
                Como o nascer do sol que ilumina novos horizontes, o Aurora oferece 
                programas especializados que ampliam competências e abrem novas 
                perspectivas de atuação profissional, sempre com foco na excelência 
                e na inovação.
              </p>
            </div>

            <div className="content-section">
              <h2>Como funciona?</h2>
              <div className="grid grid-2">
                <div className="feature-card">
                  <h3>Especializações Avançadas</h3>
                  <p>
                    Cursos de especialização em áreas específicas da nutrição, 
                    com conteúdo avançado e atualizado.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Workshops Intensivos</h3>
                  <p>
                    Workshops práticos e intensivos sobre temas específicos, 
                    com aplicação imediata na prática profissional.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Certificações Profissionais</h3>
                  <p>
                    Programas de certificação que validam competências específicas 
                    e diferenciam o profissional no mercado.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Networking Especializado</h3>
                  <p>
                    Conexão com profissionais especialistas e referências 
                    em cada área de atuação.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Para quem se destina?</h2>
              <div className="target-audience">
                <div className="audience-card">
                  <h3>Nutricionistas Experientes</h3>
                  <p>
                    Profissionais com experiência que buscam especialização 
                    em áreas específicas da nutrição.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Especialistas em Transição</h3>
                  <p>
                    Profissionais que desejam migrar para novas áreas de 
                    atuação dentro da nutrição.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Líderes e Gestores</h3>
                  <p>
                    Profissionais em posições de liderança que buscam 
                    aperfeiçoamento em gestão e inovação.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Metodologia de Especialização</h2>
              <ul className="metodologia-list">
                <li>
                  <strong>Casos Clínicos Avançados:</strong> 
                  Análise e discussão de casos complexos reais, desenvolvendo 
                  habilidades de tomada de decisão em situações desafiadoras.
                </li>
                <li>
                  <strong>Pesquisa Aplicada:</strong> 
                  Integração de pesquisa científica com prática profissional, 
                  desenvolvendo competências em evidence-based practice.
                </li>
                <li>
                  <strong>Mentoria Especializada:</strong> 
                  Acompanhamento por especialistas reconhecidos em cada área, 
                  proporcionando orientação personalizada.
                </li>
                <li>
                  <strong>Projetos Práticos:</strong> 
                  Desenvolvimento de projetos reais que podem ser implementados 
                  na prática profissional dos participantes.
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Áreas de Especialização</h2>
              <ul className="research-areas">
                <li>Nutrição Clínica Avançada</li>
                <li>Nutrição Esportiva e Performance</li>
                <li>Nutrição Materno-Infantil</li>
                <li>Nutrição e Envelhecimento</li>
                <li>Comportamento Alimentar</li>
                <li>Nutrição Funcional e Integrativa</li>
                <li>Gestão em Unidades de Alimentação</li>
                <li>Consultoria e Empreendedorismo</li>
                <li>Pesquisa e Docência</li>
                <li>Políticas Públicas em Alimentação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Desperte para novas possibilidades</h2>
            <p>
              Especialize-se e destaque-se no mercado com nossos programas 
              avançados de formação profissional.
            </p>
            <a href="/contato" className="btn btn-primary">
              Explore o Aurora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aurora;
