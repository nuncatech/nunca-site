import './FrenteFormativa.css';

const Nucleo = () => {
  return (
    <div className="frente-page">
      {/* Hero Section */}
      <section className="frente-hero nucleo-hero">
        <div className="container">
          <div className="frente-hero-content">
            <h1>Núcleo</h1>
            <p className="frente-subtitle">
              Atendimento Clínico e Consultoria Especializada
            </p>
            <p className="frente-description">
              Espaço para aplicação prática dos conhecimentos desenvolvidos nas 
              outras frentes, oferecendo atendimento clínico humanizado e 
              consultoria especializada em nutrição.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section">
        <div className="container">
          <div className="frente-content">
            <div className="content-section">
              <h2>O que é o Núcleo?</h2>
              <p>
                O Núcleo é o centro de nossa atuação prática, onde todo o conhecimento 
                desenvolvido nas outras frentes se materializa em atendimento clínico 
                de excelência. É aqui que teoria e prática se encontram para oferecer 
                cuidado nutricional humanizado e baseado em evidências.
              </p>
              <p>
                Mais do que um consultório, o Núcleo é um espaço de transformação, 
                onde profissionais aplicam conhecimentos atualizados e pacientes 
                recebem cuidado integral, considerando não apenas aspectos nutricionais, 
                mas também emocionais, sociais e culturais.
              </p>
            </div>

            <div className="content-section">
              <h2>Como funciona?</h2>
              <div className="grid grid-2">
                <div className="feature-card">
                  <h3>Atendimento Clínico</h3>
                  <p>
                    Consultas individualizadas com abordagem humanizada, 
                    integrando as melhores práticas clínicas.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Consultoria Especializada</h3>
                  <p>
                    Serviços de consultoria para empresas, instituições e 
                    outros profissionais da área.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Supervisão Clínica</h3>
                  <p>
                    Espaço para supervisão e desenvolvimento de profissionais 
                    em formação prática.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Pesquisa Clínica</h3>
                  <p>
                    Desenvolvimento de estudos clínicos aplicados, 
                    contribuindo para o avanço da ciência.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Para quem se destina?</h2>
              <div className="target-audience">
                <div className="audience-card">
                  <h3>Pacientes</h3>
                  <p>
                    Indivíduos que buscam atendimento nutricional de qualidade, 
                    com abordagem humanizada e baseada em evidências.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Empresas e Instituições</h3>
                  <p>
                    Organizações que necessitam de consultoria especializada 
                    em alimentação e nutrição.
                  </p>
                </div>
                <div className="audience-card">
                  <h3>Profissionais em Formação</h3>
                  <p>
                    Estudantes e profissionais que buscam experiência prática 
                    supervisionada de qualidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Nossa Abordagem Clínica</h2>
              <ul className="metodologia-list">
                <li>
                  <strong>Cuidado Centrado na Pessoa:</strong> 
                  Cada atendimento é personalizado, considerando história, contexto 
                  e necessidades individuais de cada paciente.
                </li>
                <li>
                  <strong>Prática Baseada em Evidências:</strong> 
                  Todas as condutas são fundamentadas nas melhores evidências 
                  científicas disponíveis, sempre atualizadas.
                </li>
                <li>
                  <strong>Abordagem Multidisciplinar:</strong> 
                  Trabalho integrado com outros profissionais quando necessário, 
                  garantindo cuidado integral.
                </li>
                <li>
                  <strong>Educação Nutricional:</strong> 
                  Capacitação do paciente para autonomia e manutenção de hábitos 
                  saudáveis a longo prazo.
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Serviços Oferecidos</h2>
              <ul className="research-areas">
                <li>Consulta Nutricional Individual</li>
                <li>Acompanhamento Nutricional Continuado</li>
                <li>Avaliação Nutricional Completa</li>
                <li>Planejamento Dietético Personalizado</li>
                <li>Orientação para Mudança de Comportamento</li>
                <li>Consultoria para Empresas</li>
                <li>Treinamento de Equipes</li>
                <li>Desenvolvimento de Protocolos</li>
                <li>Supervisão Profissional</li>
                <li>Pesquisa Clínica Aplicada</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Diferenciais do Núcleo</h2>
              <div className="grid grid-3">
                <div className="feature-card">
                  <h3>Integração Ensino-Pesquisa-Extensão</h3>
                  <p>
                    Ambiente que combina atendimento clínico com formação 
                    profissional e desenvolvimento científico.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Atualização Constante</h3>
                  <p>
                    Profissionais em constante atualização através das 
                    atividades das outras frentes do NUNCA.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Ambiente Acolhedor</h3>
                  <p>
                    Espaço físico e emocional preparado para proporcionar 
                    conforto e segurança aos pacientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Experimente o cuidado do Núcleo</h2>
            <p>
              Receba atendimento nutricional de excelência, com abordagem 
              humanizada e baseada nas melhores evidências científicas.
            </p>
            <a href="/contato" className="btn btn-primary">
              Agende sua consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nucleo;
