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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              O que é o LAB? 🤔💡
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                O LAB é o nosso "Laboratório" de ideias, onde a teoria encontra a prática e a conversa flui sem amarras. 🧪✨
              </p>
              <p>
                É um evento mensal que acontece em um formato híbrido, pensado para quem gosta de estar perto e para quem precisa da facilidade do online. 🌍💻
              </p>
              <div className="bg-tertiary/10 border-l-4 border-tertiary p-6 my-8">
                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                  Nele, convidamos um palestrante de fora para enriquecer nossa discussão e ampliar nossos horizontes. 🗣️🌟
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
              Como funciona? ⚙️🗓️
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                LAB Online
              </h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                Acontece via Zoom, permitindo que você participe de onde estiver. 🏠
              </p>
              <ul className="space-y-2 text-foreground/70 dark:text-foreground-dark/70">
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Transmissão ao vivo 🔴
                </li>
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Interação via chat 💬
                </li>
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Material de apoio 📚
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                LAB Presencial
              </h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                Para quem prefere o olho no olho e a energia do encontro físico. 👀⚡
              </p>
              <ul className="space-y-2 text-foreground/70 dark:text-foreground-dark/70">
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Coffee break delicioso 🥐☕
                </li>
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Networking presencial 🤝
                </li>
                <li className="flex items-center">
                  <span className="text-tertiary mr-2">•</span>
                  Ambiente acolhedor 🛋️
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8 text-center">
              O que rola no LAB? 🧐📚
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Atualização científica sem 'nutrês' complicado 🧬",
                "Discussão de casos reais 📝",
                "Troca de experiências entre profissionais 🗣️",
                "Debates sobre tendências na nutrição 📈"
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted dark:bg-muted-dark p-6 rounded-lg flex items-center"
                >
                  <span className="text-tertiary text-xl mr-3">➜</span>
                  <span className="text-foreground/80 dark:text-foreground-dark/80 font-medium">
                    {topic}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary-dark/10">
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
