import Card from '../components/Card';
import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-page">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="container">
          <div className="sobre-hero-content">
            <h1>Sobre Nós</h1>
            <p className="sobre-subtitle">
              Conheça nossa história, missão e a equipe que torna o NUNCA possível
            </p>
          </div>
        </div>
      </section>

      {/* Carta da Fundadora */}
      <section className="section carta-fundadora">
        <div className="container">
          <div className="carta-content">
            <div className="carta-header">
              <h2>Carta da Fundadora</h2>
              <p className="carta-autor">Por Priscilla Fratti</p>
            </div>
            
            <div className="carta-texto">
              <p>
                Queridos colegas, estudantes e entusiastas da nutrição,
              </p>
              
              <p>
                É com imensa alegria e propósito que apresento a vocês o NUNCA - 
                Núcleo de Nutrição, Clínica e Atualização. Este projeto nasce do 
                meu sonho de criar um espaço onde conhecimento, prática e humanização 
                se encontram para transformar a forma como enxergamos e praticamos 
                a nutrição.
              </p>
              
              <p>
                Durante minha trajetória profissional, percebi que muitas vezes 
                existe uma lacuna entre o que aprendemos na academia e o que 
                encontramos na prática clínica. O NUNCA surge justamente para 
                preencher essa lacuna, criando pontes onde antes existiam barreiras.
              </p>
              
              <p>
                Acredito profundamente que a nutrição vai muito além dos nutrientes. 
                Ela envolve histórias, culturas, emoções e relações humanas. Por 
                isso, nosso compromisso é sempre com uma abordagem humanizada, que 
                considera a pessoa em sua totalidade.
              </p>
              
              <p>
                O NUNCA não é apenas um projeto educacional ou um consultório. É um 
                movimento de transformação, onde cada profissional formado, cada 
                pesquisa desenvolvida e cada paciente atendido contribui para um 
                futuro mais saudável e consciente.
              </p>
              
              <p>
                Convido vocês a fazerem parte desta jornada. Juntos, vamos nutrir 
                não apenas corpos, mas também conhecimento, relações e sonhos.
              </p>
              
              <p className="carta-assinatura">
                Com carinho e propósito,<br />
                <strong>Priscilla Fratti</strong><br />
                <em>Fundadora do NUNCA</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section missao-visao-valores">
        <div className="container">
          <h2 className="text-center">Missão, Visão e Valores</h2>
          
          <div className="grid grid-3 mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3>Missão</h3>
              <p>
                Transformar barreiras em pontes, conectando conhecimento científico 
                atualizado com prática clínica humanizada, formando profissionais 
                competentes e oferecendo cuidado nutricional de excelência.
              </p>
            </div>
            
            <div className="mvv-card">
              <div className="mvv-icon">🌟</div>
              <h3>Visão</h3>
              <p>
                Ser referência nacional em formação, pesquisa e prática em nutrição, 
                reconhecida pela excelência técnica, inovação e compromisso com a 
                humanização do cuidado.
              </p>
            </div>
            
            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Valores</h3>
              <ul>
                <li>Excelência científica</li>
                <li>Humanização do cuidado</li>
                <li>Educação transformadora</li>
                <li>Inovação responsável</li>
                <li>Colaboração e networking</li>
                <li>Ética profissional</li>
                <li>Inclusão e diversidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section equipe">
        <div className="container">
          <div className="equipe-header text-center">
            <h2>Nossa Equipe</h2>
            <p className="section-subtitle">
              Conheça os profissionais dedicados que tornam o NUNCA uma realidade
            </p>
          </div>
          
          <div className="grid grid-3 equipe-grid">
            <Card
              title="Priscilla Fratti"
              description="Fundadora e Coordenadora Geral do NUNCA. Nutricionista especializada em nutrição clínica e educação nutricional."
              className="card-team"
              image="/team/priscilla.jpg"
              imageAlt="Priscilla Fratti"
            />
            
            <Card
              title="Dra. Maria Silva"
              description="Coordenadora de Pesquisa do LAB. Doutora em Nutrição com expertise em metodologia científica e pesquisa clínica."
              className="card-team"
              image="/team/maria.jpg"
              imageAlt="Dra. Maria Silva"
            />
            
            <Card
              title="Prof. João Santos"
              description="Coordenador do Raiz. Professor universitário com vasta experiência em formação básica em nutrição."
              className="card-team"
              image="/team/joao.jpg"
              imageAlt="Prof. João Santos"
            />
            
            <Card
              title="Dra. Ana Costa"
              description="Coordenadora do Aurora. Especialista em nutrição esportiva e comportamento alimentar."
              className="card-team"
              image="/team/ana.jpg"
              imageAlt="Dra. Ana Costa"
            />
            
            <Card
              title="Nut. Carlos Oliveira"
              description="Coordenador do Núcleo. Nutricionista clínico com experiência em atendimento humanizado."
              className="card-team"
              image="/team/carlos.jpg"
              imageAlt="Nut. Carlos Oliveira"
            />
            
            <Card
              title="Dra. Fernanda Lima"
              description="Supervisora Clínica. Doutora em Nutrição Clínica com foco em doenças crônicas não transmissíveis."
              className="card-team"
              image="/team/fernanda.jpg"
              imageAlt="Dra. Fernanda Lima"
            />
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section nossa-historia">
        <div className="container">
          <div className="historia-content">
            <div className="historia-texto">
              <h2>Nossa História</h2>
              <p>
                O NUNCA nasceu em 2024 do sonho de criar um espaço integrado de 
                formação, pesquisa e prática em nutrição. A ideia surgiu da 
                percepção de que era necessário um novo modelo de atuação que 
                conectasse de forma mais efetiva a academia com a prática clínica.
              </p>
              <p>
                Desde o início, nossa proposta foi inovadora: criar quatro frentes 
                complementares que se retroalimentam, garantindo que conhecimento 
                teórico, pesquisa científica, formação profissional e prática 
                clínica caminhem juntos.
              </p>
              <p>
                Hoje, o NUNCA é uma realidade em crescimento, com profissionais 
                dedicados e uma comunidade engajada de estudantes, profissionais 
                e pacientes que acreditam em nossa missão de transformar a nutrição 
                através do conhecimento e da humanização.
              </p>
            </div>
            
            <div className="historia-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Fundação do NUNCA</h4>
                  <p>Criação oficial do núcleo com as quatro frentes formativas</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Primeiros Cursos</h4>
                  <p>Lançamento dos programas Raiz e Aurora</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>LAB em Funcionamento</h4>
                  <p>Início das atividades de pesquisa e desenvolvimento científico</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Núcleo Clínico</h4>
                  <p>Abertura do espaço de atendimento clínico e consultoria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-sobre">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Faça parte da nossa história</h2>
            <p>
              Junte-se a nós nesta jornada de transformação da nutrição. 
              Vamos construir juntos um futuro mais saudável e humanizado.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="btn btn-primary">
                Entre em contato
              </a>
              <a href="/" className="btn btn-secondary">
                Conheça nossas frentes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
