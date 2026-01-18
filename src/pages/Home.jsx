import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        style={{
          backgroundImage: 'url(/imagens_nunca/capa 01.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background-dark/90 transition-colors" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary dark:text-primary-dark mb-6 transition-colors">
              O NUNCA é acima de tudo,
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 dark:text-foreground-dark/90 mb-8 transition-colors">
              um projeto de integração entre estudantes e profissionais da área da saúde
            </p>
            <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Criado para conectar pessoas, histórias e vivências, o NUNCA existe para ser a ponte e a estrutura para quem também acredita que crescer em comunidade é crescer mais forte e ir mais longe.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
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
                  Junte-se à Comunidade NUCLEO →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-8"
            >
              O que você encontra aqui?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-foreground/80 dark:text-foreground-dark/80 leading-relaxed max-w-4xl mx-auto"
            >
              Aqui, a nutrição é mais que técnica: é um caminho humano, possível e coletivo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed max-w-4xl mx-auto"
          >
            <motion.p variants={fadeInUp}>
              Nossas frentes de trabalho são diferentes, mas se articulam como partes de um mesmo corpo, unindo a prática profissional, a humanização e o compromisso social.
            </motion.p>
            <motion.p variants={fadeInUp}>
              No NUNCA, queremos fortalecer a prática profissional com afeto, democratizar o acesso à informação de qualidade, criar redes de apoio e abrir caminhos para quem precisa.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-cta/10 border-l-4 border-cta p-6 my-8">
              <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                Acreditamos que todo caminho sólido é construído em conjunto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-6"
            >
              Nossos Espaços
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-foreground/80 dark:text-foreground-dark/80 max-w-3xl mx-auto"
            >
              Diferentes espaços de aprendizado, pensados para atender o que cada pessoa precisa em um momento único.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 dark:bg-background-dark dark:border-primary-dark/20">
                <CardHeader>
                  <div className="text-4xl mb-2">💡</div>
                  <CardTitle className="dark:text-primary-dark">LAB</CardTitle>
                  <CardDescription className="dark:text-foreground-dark/70">
                    Laboratório de ideias mensal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                    Eventos mensais online e presenciais com palestrantes convidados.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/lab">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 dark:bg-background-dark dark:border-primary-dark/20">
                <CardHeader>
                  <div className="text-4xl mb-2">🐝</div>
                  <CardTitle className="dark:text-primary-dark">Colmeia</CardTitle>
                  <CardDescription className="dark:text-foreground-dark/70">
                    Mentorias modulares
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                    Construa sua jornada de aprendizado no seu ritmo e do seu jeito.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/colmeia">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 dark:bg-background-dark dark:border-primary-dark/20">
                <CardHeader>
                  <div className="text-4xl mb-2">🍯</div>
                  <CardTitle className="dark:text-primary-dark">Favos</CardTitle>
                  <CardDescription className="dark:text-foreground-dark/70">
                    Mini cursos focados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                    Aprofunde temas específicos com formações pontuais.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/favos">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 dark:bg-background-dark dark:border-primary-dark/20">
                <CardHeader>
                  <div className="text-4xl mb-2">💊</div>
                  <CardTitle className="dark:text-primary-dark">Cápsulas</CardTitle>
                  <CardDescription className="dark:text-foreground-dark/70">
                    Comunidades temáticas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">
                    Espaços vivos de convivência e troca guiada.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/capsulas">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ComuNunca Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                Comu.Nunca
              </h2>
              <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-6">
                A Comu.Nunca é a nossa <strong>comunidade pública!</strong> O seu primeiro espaço exclusivo dentro da casa do NUNCA e o lugar onde você começa a conhecer de pertinho todo o ecossistema que estamos construindo.
              </p>
              <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-6">
                Essa comunidade existe para integrar todo mundo. Aqui é para conversar, trocar, falar, rir, expor ideias, pedir ajuda... É um lugar vivo onde a gente se encontra, se abraça, se ajuda e caminha uma do lado da outra.
              </p>
              <div className="bg-accent/10 dark:bg-accent-dark/10 border-l-4 border-accent dark:border-accent-dark p-6 mb-6">
                <p className="text-foreground/90 dark:text-foreground-dark/90 italic">
                  "A Comu.Nunca não nasce pronta, não é estática... ela se constrói de pouco em pouco, com as pessoas que estão aqui dentro. E isso inclui você! Esse espaço é seu também."
                </p>
              </div>
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
                  Entrar na Comu.Nunca →
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted dark:bg-muted-dark p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                🔓 O que você encontra na ComuNunca
              </h3>
              <ul className="space-y-4 text-foreground/80 dark:text-foreground-dark/80">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Avisos e novidades sobre tudo o que acontece no NUNCA</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Convites para aulas, encontros e eventos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conteúdos pontuais sobre prática, carreira, estudos e cuidado</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Espaços de conversa guiada com tópicos específicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Orientações sobre como entrar em cada espaço do NÚCLEO</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-8 text-center"
            >
              Nossos valores e compromissos
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed"
            >
              <motion.p variants={fadeInUp}>
                Nosso maior compromisso é ser a <strong>rede de apoio</strong> e a <strong>estrutura</strong> para uma comunidade que acredita que uma formação significativa nasce de quem a gente é, antes de mais nada.
              </motion.p>
              <motion.div variants={fadeInUp} className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6 my-8">
                <p className="text-xl font-semibold text-primary dark:text-primary-dark italic">
                  "A gente cuida do que te sustenta por dentro."
                </p>
              </motion.div>
              <motion.p variants={fadeInUp}>
                Valorizamos a construção de uma rede real, com escuta, afeto e segurança, onde você pode crescer acompanhado. Acreditamos que a formação e a prática profissional não devem andar separadas, mas conectadas à sua vida, à sua essência e à comunidade da qual você faz parte.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cta/10 via-accent/10 to-background dark:from-cta/5 dark:via-accent-dark/5 dark:to-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
              O NUNCA é um convite
            </h2>
            <p className="text-xl text-foreground/80 dark:text-foreground-dark/80 mb-12 leading-relaxed">
              Um convite para construirmos juntos um espaço mais humano, acessível e acolhedor na área da saúde. Seja como profissional, parceiro, estudante ou apoiador, você é bem vindo!
            </p>
            <p className="text-lg text-foreground/70 dark:text-foreground-dark/70 mb-8 italic">
              Vamos abrir mais portas e falar do que importa?
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
                Fazer Parte do NUNCA →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
