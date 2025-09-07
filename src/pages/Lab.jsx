import './FrenteFormativa.css';

const Lab = () => {
  return (
    <div className="frente-page">
      {/* Hero Section */}
      <section className="frente-hero lab-hero">
        <div className="container">
          <div className="frente-hero-content">
            <h1>LAB</h1>
            <p className="frente-subtitle">
              Laboratório de Pesquisa e Inovação em Nutrição
            </p>
            <p className="frente-description">
              Espaço dedicado ao desenvolvimento de pesquisas científicas e projetos 
              inovadores na área da nutrição, conectando teoria e prática através 
              de metodologias científicas rigorosas.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section">
        <div className="container">
          <div className="frente-content">
            <div className="content-section">
              <h2>O que é o LAB?</h2>
              <p>
                O LAB é nosso laboratório de pesquisa e inovação, onde desenvolvemos 
                estudos científicos aplicados à nutrição clínica e coletiva. Nossa 
                abordagem combina rigor metodológico com aplicação prática, gerando 
                conhecimento que pode ser diretamente aplicado no atendimento e na 
                formação profissional.
              </p>
              <p>
                Trabalhamos com diferentes linhas de pesquisa, desde estudos 
                observacionais até ensaios clínicos, sempre com foco na geração 
                de evidências que possam contribuir para a melhoria da prática 
                nutricional.
              </p>
            </div>

            <div className="content-section">
              <h2>Como funciona?</h2>
              <div className="grid grid-2">
                <div className="feature-card">
                  <h3>Projetos de Pesquisa</h3>
                  <p>
                    Desenvolvimento de estudos originais em nutrição, com metodologia 
                    científica rigorosa e aplicação prática dos resultados.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Parcerias Acadêmicas</h3>
                  <p>
                    Colaboração com universidades e institutos de pesquisa para 
                    ampliar o alcance e a qualidade dos estudos desenvolvidos.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Publicações Científicas</h3>
                  <p>
                    Disseminação dos resultados através de artigos científicos, 
                    congressos e eventos da área.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Aplicação Prática</h3>
                  <p>
                    Tradução dos achados científicos em protocolos e diretrizes 
                    práticas para profissionais da área.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Para quem se destina?</h2>
              <div className="target-audience">
                <div className="audience-card">
                  <h3>Pesquisadores</h3>
                  <p>
                    Profissionais interessados em desenvolver pesquisas na área 
                    da nutrição, desde iniciantes até pesquisadores experientes.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Estudantes de Pós-graduação</h3>
                  <p>
                    Mestrandos e doutorandos que buscam orientação e colaboração 
                    em seus projetos de pesquisa.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Profissionais da Prática</h3>
                  <p>
                    Nutricionistas e outros profissionais que desejam integrar 
                    evidências científicas em sua prática clínica.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Áreas de Pesquisa</h2>
              <ul className="research-areas">
                <li>Nutrição Clínica e Terapia Nutricional</li>
                <li>Comportamento Alimentar e Psicologia da Nutrição</li>
                <li>Nutrição Materno-Infantil</li>
                <li>Nutrição e Envelhecimento</li>
                <li>Nutrição Esportiva e Performance</li>
                <li>Segurança Alimentar e Nutricional</li>
                <li>Tecnologia de Alimentos e Inovação</li>
                <li>Epidemiologia Nutricional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Interessado em participar do LAB?</h2>
            <p>
              Faça parte da nossa comunidade de pesquisadores e contribua para 
              o avanço da ciência da nutrição.
            </p>
            <a href="/contato" className="btn btn-primary">
              Entre em contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
