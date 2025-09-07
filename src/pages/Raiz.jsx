import './FrenteFormativa.css';

const Raiz = () => {
  return (
    <div className="frente-page">
      {/* Hero Section */}
      <section className="frente-hero raiz-hero">
        <div className="container">
          <div className="frente-hero-content">
            <h1>Raiz</h1>
            <p className="frente-subtitle">
              Formação Básica e Fundamental em Nutrição
            </p>
            <p className="frente-description">
              Programa voltado para estudantes e profissionais que buscam fortalecer 
              suas bases teóricas e práticas, construindo uma base sólida para o 
              desenvolvimento profissional em nutrição.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section">
        <div className="container">
          <div className="frente-content">
            <div className="content-section">
              <h2>O que é o Raiz?</h2>
              <p>
                O Raiz é nossa frente formativa focada nos fundamentos da nutrição. 
                Aqui, construímos as bases sólidas necessárias para uma prática 
                profissional competente e segura, abordando desde os conceitos 
                básicos até a aplicação prática dos conhecimentos.
              </p>
              <p>
                Nossa metodologia combina teoria atualizada com prática supervisionada, 
                garantindo que os participantes desenvolvam não apenas conhecimento 
                técnico, mas também habilidades práticas e pensamento crítico.
              </p>
            </div>

            <div className="content-section">
              <h2>Como funciona?</h2>
              <div className="grid grid-2">
                <div className="feature-card">
                  <h3>Módulos Fundamentais</h3>
                  <p>
                    Conteúdos essenciais organizados em módulos progressivos, 
                    cobrindo todas as áreas básicas da nutrição.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Aulas Práticas</h3>
                  <p>
                    Atividades práticas supervisionadas para aplicação dos 
                    conceitos teóricos em situações reais.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Mentoria Individualizada</h3>
                  <p>
                    Acompanhamento personalizado com profissionais experientes 
                    para orientação e desenvolvimento.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Avaliação Contínua</h3>
                  <p>
                    Sistema de avaliação que acompanha o progresso e identifica 
                    áreas para melhoria.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Para quem se destina?</h2>
              <div className="target-audience">
                <div className="audience-card">
                  <h3>Estudantes de Graduação</h3>
                  <p>
                    Estudantes de nutrição que desejam complementar e aprofundar 
                    seus conhecimentos básicos.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Recém-formados</h3>
                  <p>
                    Profissionais recém-formados que buscam consolidar seus 
                    conhecimentos antes de iniciar a prática profissional.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Profissionais em Transição</h3>
                  <p>
                    Nutricionistas que desejam atualizar ou revisar conceitos 
                    fundamentais da profissão.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Metodologia de Ensino</h2>
              <ul className="metodologia-list">
                <li>
                  <strong>Aprendizagem Ativa:</strong> 
                  Metodologias que colocam o aluno como protagonista do aprendizado, 
                  com discussões, casos clínicos e resolução de problemas.
                </li>
                <li>
                  <strong>Prática Baseada em Evidências:</strong> 
                  Ensino fundamentado nas melhores evidências científicas disponíveis, 
                  sempre atualizadas e contextualizadas.
                </li>
                <li>
                  <strong>Integração Teoria-Prática:</strong> 
                  Conexão constante entre conceitos teóricos e aplicação prática, 
                  preparando para situações reais.
                </li>
                <li>
                  <strong>Desenvolvimento de Competências:</strong> 
                  Foco no desenvolvimento de habilidades técnicas, comunicacionais 
                  e de pensamento crítico.
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Áreas de Conhecimento</h2>
              <ul className="research-areas">
                <li>Bioquímica da Nutrição</li>
                <li>Fisiologia da Nutrição</li>
                <li>Bromatologia e Análise de Alimentos</li>
                <li>Técnica Dietética</li>
                <li>Avaliação Nutricional</li>
                <li>Planejamento Dietético</li>
                <li>Educação Nutricional</li>
                <li>Ética Profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Fortaleça suas raízes na nutrição</h2>
            <p>
              Construa uma base sólida para sua carreira profissional com 
              nosso programa de formação fundamental.
            </p>
            <a href="/contato" className="btn btn-primary">
              Saiba mais sobre o Raiz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Raiz;
