import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Lab = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-20 bg-background dark:bg-background-dark transition-colors">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-background dark:from-accent-dark/10 dark:to-background-dark"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary dark:text-primary-dark mb-6"
          >
            LAB
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80 font-medium"
          >
            Laboratório de ideias mensal do NUNCA
          </motion.p>
        </div>
      </motion.section>

      {/* O que é */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Mas afinal de contas... o que é o LAB?
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                O LAB é o nosso laboratório de ideias do NUNCA. Ele foi criado para promover, na prática, toda a integração da qual a gente tanto fala, de um jeito íntimo, vivo e com constante mudança.
              </p>
              <div className="bg-cta/10 border-l-4 border-cta p-6 my-8">
                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                  Todo mês nós temos o LAB ONLINE e o LAB PRESENCIAL, sempre com novos temas, novos olhares e novas provocações.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                LAB ONLINE
              </h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                Todo mês um palestrante convidado assume o palco e traz um tema, uma aula e uma forma diferente de enxergar aquele assunto.
              </p>
              <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                Você entra na sala do Zoom através do seu login e senha da comunidade e assiste de onde estiver.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 dark:text-foreground-dark/70">
                <p>✓ Material de apoio</p>
                <p>✓ Página de conteúdo</p>
                <p>✓ Certificado de participação</p>
                <p>✓ Roda de conversa ao vivo</p>
                <p>✓ Brindes e sorteios especiais</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                LAB PRESENCIAL
              </h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                Todo mês, um palestrante diferente assume o palco do NUNCA, trazendo um tema, uma aula e um jeito novo de olhar para aquele assunto.
              </p>
              <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                Além da aula, você participa do BREAK, que é o coffee do NUNCA, pensado especialmente para você, como parte da experiência.
              </p>
              <div className="space-y-2 text-sm text-foreground/70 dark:text-foreground-dark/70">
                <p>✓ Aula presencial</p>
                <p>✓ BREAK (coffee especial)</p>
                <p>✓ Certificado de participação</p>
                <p>✓ Brindes e sorteios</p>
                <p>✓ Networking presencial</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dinâmica */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Uma experiência em constante movimento
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                Nos dois formatos, <strong>todo mês o conteúdo muda, os temas mudam, os palestrantes mudam e até o nosso Instagram muda</strong>, acompanhando o movimento do LAB.
              </p>
              <p>
                Ao longo do ano, você tem a oportunidade de ver diversos palestrantes, circular por vários temas e viver muitas aulas diferentes, sempre com a integração, a atenção e a estrutura do NUNCA.
              </p>
              <div className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6 my-8">
                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                  O LAB não é um evento solto. É uma experiência contínua dentro do NUNCA.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Acessível e completo
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-6">
              O LAB foi pensado para ser <strong>acessível</strong>, uma porta de entrada real, um convite constante à troca, à prática e à formação contínua.
            </p>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              Você paga um valor simbólico, mas participa de uma experiência completa, com conteúdo inédito, troca ao vivo, material de apoio, certificado, sorteios, integração e presença.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
              Participe do próximo LAB
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-8">
              Veja a programação do mês e garanta sua vaga.
            </p>
            <Button
              asChild
              variant="cta"
              size="xl"
              className="text-lg"
            >
              <a
                href="https://nucleo.gruponunca.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Programação do LAB →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
