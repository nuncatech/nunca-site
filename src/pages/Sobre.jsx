import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Sobre = () => {
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
            Sobre o NUNCA
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            NUNCA paramos de nutrir o que importa
          </motion.p>
        </div>
      </motion.section>

      {/* Missão */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Nossa Missão 🧭✨
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                Aqui, a técnica caminha junto com a escuta e o conhecimento anda de mãos dadas com o afeto. 🤝🧠
              </p>
              <p>
                Nossa estrutura se apoia em diferentes frentes de trabalho que não existem por acaso. Cada detalhe foi pensado para solucionar uma necessidade. 💡⚙️
              </p>
              <div className="bg-cta/10 border-l-4 border-cta p-6 my-8">
                <p className="text-xl font-bold text-primary dark:text-primary-dark">
                  Pessoas são o "por quê" e o "por quem" do NUNCA. 👥❤️
                </p>
                <p className="text-base text-foreground/70 dark:text-foreground-dark/70 mt-2">
                  Todos os projetos são estruturados para te fazer se sentir acolhido, ouvido e apoiado. 👐👂
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Como trabalhamos 🛠️📋
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                Fugimos da ideia de que o aprendizado precisa ser "cada um por si" e abraçamos a concepção de que, lado a lado, um ensina o outro, criando uma rede de aprendizado mais sólida e completa. 🕸️📚
              </p>
              <p>
                Trabalhamos para que a troca constante entre profissionais e estudantes seja o ponto focal do NUNCA. Por isso, criamos diferentes espaços de aprendizado, pensados para atender o que cada pessoa precisa em um momento único. 🔄🎓
              </p>
              <p>
                Tudo no NUNCA foi pensado e construído em conjunto, ouvindo de perto as necessidades e os desejos de estudantes e profissionais da área. Existimos para quem quer fazer parte de um projeto vivo, integrado e em constante crescimento. 🌱🚀
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary-dark/10 dark:to-accent-dark/10 p-12 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                O NUNCA nasce com um propósito 🎯
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-cta mb-8">
                TRANSFORMAR BARREIRAS EM PONTES! 🌉✨
              </p>
              <p className="text-xl text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                A gente acredita em um outro jeito de andar. Mais leve, mais junto, mais possível. 🍃👣
              </p>
              <p className="text-lg text-foreground/70 dark:text-foreground-dark/80 mt-6 italic">
                E se isso também faz sentido pra você, vem com a gente. 🤗💖
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
              Nossos Valores 💎
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Comunidade</h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80">
                Crescimento em rede, onde profissionais e estudantes se apoiam mutuamente. 🌐
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Humanização</h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80">
                Cuidado centrado na pessoa, com escuta ativa, afeto e respeito à individualidade. 👂
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Formação</h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80">
                Educação continuada, prática e técnica caminhando juntas. 🎓
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comunidade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
              Comu.Nunca 🗣️
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
              <p>
                A Comu.Nunca é a nossa comunidade pública! O seu primeiro espaço exclusivo dentro da casa do NUNCA e o lugar onde você começa a conhecer de pertinho todo o ecossistema que estamos construindo. 🏠🔍
              </p>
              <p>
                Essa comunidade existe para integrar todo mundo. Aqui é para conversar, trocar, falar, rir, expor ideias, pedir ajuda... 💬😂 É um lugar vivo onde a gente se encontra, se abraça, se ajuda e caminha uma do lado da outra. 🤝
              </p>
              <div className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6 my-8">
                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                  A Comu.Nunca não nasce pronta, não é estática... ela se constrói de pouco em pouco, com as pessoas que estão aqui dentro. 🏗️
                </p>
                <p className="text-base text-foreground/70 dark:text-foreground-dark/70 mt-2">
                  E isso inclui você! Esse espaço é seu também. 🫵✨
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cta/10 to-accent/10 dark:from-cta/5 dark:to-accent-dark/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
              Faça parte dessa história
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-8">
              O NUNCA é o mundo onde nada se constrói sozinho. Onde juntos vamos mais longe, um passinho de cada vez.
            </p>
            <Button
              asChild
              variant="cta"
              size="lg"
            >
              <a
                href="https://nucleo.gruponunca.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar no NUCLEO →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
