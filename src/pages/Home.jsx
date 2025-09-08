import Card from '../components/Card';
import './Home.css';
import { useTheme } from '../components/ThemeContext.jsx';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="home">
      {/* Seção Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Nunca paramos de nutrir o que importa.
              </h1>
              <p className="hero-subtitle">
                Um Núcleo de Nutrição, Clínica e Atualização criado para transformar 
                barreiras em pontes e nutrir o que realmente importa: pessoas, 
                conhecimento e conexões humanas.
              </p>
              <div className="hero-buttons">
                <a href="#frentes" className="btn btn-primary">
                  Conheça nossas frentes
                </a>
                <a href="/sobre" className="btn btn-secondary">
                  Sobre nós
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={theme === 'dark' ? '/logo-nunca-dark.png' : '/logo-nunca.svg'} alt="NUNCA - Núcleo de Nutrição" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nossas Frentes */}
      <section id="frentes" className="section frentes">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nossas Frentes Formativas</h2>
            <p className="section-subtitle">
              Conheça os quatro pilares que sustentam nossa missão de transformar 
              a nutrição através da educação, pesquisa e prática clínica.
            </p>
          </div>
          
          <div className="grid grid-4 frentes-grid">
            <Card
              title="LAB"
              description="Laboratório de Pesquisa e Inovação em Nutrição. Espaço dedicado ao desenvolvimento de pesquisas científicas e projetos inovadores na área da nutrição."
              link="/lab"
              className="frente-card lab-card"
            />
            
            <Card
              title="Raiz"
              description="Formação básica e fundamental em nutrição. Programa voltado para estudantes e profissionais que buscam fortalecer suas bases teóricas e práticas."
              link="/raiz"
              className="frente-card raiz-card"
            />
            
            <Card
              title="Aurora"
              description="Especialização e aperfeiçoamento profissional. Cursos avançados e especializações para profissionais que desejam expandir seus conhecimentos."
              link="/aurora"
              className="frente-card aurora-card"
            />
            
            <Card
              title="Núcleo"
              description="Atendimento clínico e consultoria especializada. Espaço para aplicação prática dos conhecimentos desenvolvidos nas outras frentes."
              link="/nucleo"
              className="frente-card nucleo-card"
            />
          </div>
        </div>
      </section>

      {/* Seção Missão */}
      <section className="section missao">
        <div className="container">
          <div className="missao-content">
            <div className="missao-text">
              <h2>Nossa Missão</h2>
              <p>
                Transformar barreiras em pontes, conectando conhecimento científico 
                atualizado com a prática clínica humanizada. Nosso compromisso é 
                nutrir não apenas corpos, mas também mentes e relacionamentos, 
                criando um ecossistema de aprendizado contínuo e crescimento mútuo.
              </p>
              <p>
                Acreditamos que a nutrição vai além dos nutrientes - ela envolve 
                cultura, emoções, relações sociais e bem-estar integral. Por isso, 
                nossa abordagem é sempre holística e centrada na pessoa.
              </p>
              <div className="missao-highlights">
                <div className="highlight">
                  <h4>Educação Continuada</h4>
                  <p>Formação permanente de profissionais qualificados</p>
                </div>
                <div className="highlight">
                  <h4>Pesquisa Aplicada</h4>
                  <p>Desenvolvimento de conhecimento científico prático</p>
                </div>
                <div className="highlight">
                  <h4>Prática Humanizada</h4>
                  <p>Atendimento clínico centrado na pessoa</p>
                </div>
              </div>
            </div>
            <div className="missao-image">
              <div className="missao-card">
                <h3>Valores Fundamentais</h3>
                <ul>
                  <li>Excelência científica</li>
                  <li>Humanização do cuidado</li>
                  <li>Educação transformadora</li>
                  <li>Inovação responsável</li>
                  <li>Colaboração e networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Vamos abrir mais portas juntos?</h2>
            <p>
              Faça parte da nossa comunidade de profissionais e estudantes 
              comprometidos com a excelência em nutrição.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="btn btn-primary">
                Entre em contato
              </a>
              <a href="/sobre" className="btn btn-secondary">
                Conheça nossa equipe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
