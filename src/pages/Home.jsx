import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const spaces = [
    {
      title: 'Lab',
      description: 'Laboratório de pesquisa e inovação. Espaço dedicado ao desenvolvimento de projetos inovadores na área da nutrição.',
      path: '/lab',
      color: 'accent'
    },
    {
      title: 'Mentorias',
      description: 'Mentoria individualizada e em grupo. Apoio direto para profissionais e estudantes que buscam crescimento.',
      path: '/mentorias',
      color: 'primary'
    },
    {
      title: 'Cursos',
      description: 'Formação técnica e humanizada. Cursos pensados para fortalecer suas bases teóricas e práticas.',
      path: '/cursos',
      color: 'cta'
    },
    {
      title: 'Cápsulas',
      description: 'Conteúdos rápidos e acessíveis. Pílulas de conhecimento para o seu dia a dia profissional.',
      path: '/capsulas',
      color: 'accent'
    },
  ];

  return (
    <div className="min-h-screen">
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
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              O Nunca é acima de tudo,
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary/90 mb-8 font-light">
              um projeto de integração entre estudantes e profissionais da área da saúde.
            </p>
            <p className="text-lg sm:text-xl text-primary/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Criado para conectar pessoas, histórias e vivências, o NUNCA existe para ser a ponte e a estrutura
              para quem também acredita que crescer em comunidade é crescer mais forte e ir mais longe.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center"
            >
              O que você encontra aqui?
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed">
              <p>
                Aqui, a nutrição é mais que técnica: é um caminho humano, possível e coletivo.
              </p>
              <p>
                Nossas frentes de trabalho são diferentes, mas se articulam como partes de um mesmo corpo,
                unindo a prática profissional, a humanização e o compromisso social.
              </p>
              <p>
                No NUNCA, queremos fortalecer a prática clínica com afeto, democratizar o acesso à informação
                de qualidade, criar redes de apoio e abrir caminhos para quem precisa.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                <p className="text-xl font-semibold text-primary">
                  O NUNCA nasce com um propósito: TRANSFORMAR BARREIRAS EM PONTES!
                </p>
              </div>
              <p>
                Trabalhamos para que a troca constante entre profissionais e estudantes seja o ponto focal do NUNCA.
                Por isso, criamos diferentes espaços de aprendizado, pensados para atender o que cada pessoa precisa
                em um momento único.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            >
              Nossos Espaços
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary/80 max-w-3xl mx-auto"
            >
              Diferentes espaços de aprendizado, pensados para atender o que cada pessoa precisa em um momento único.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {spaces.map((space, index) => (
              <motion.div
                key={space.path}
                variants={fadeInUp}
              >
                <Link to={space.path}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                        {space.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {space.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center"
            >
              Nossos valores <br />e compromissos…
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed mt-12">
              <p>
                Nosso maior compromisso é ser a <strong>rede de apoio</strong> e a <strong>estrutura</strong> para
                uma comunidade que acredita que uma formação clínica significativa nasce de quem a gente é, antes de mais nada.
              </p>
              <p>
                Cursos, vivência clínica, faculdade... tudo isso é essencial, mas o seu verdadeiro alicerce é o que você
                já viveu, aprendeu e sentiu. São as suas histórias e experiências de vida.
              </p>
              <p>
                É por isso que, no NUNCA, vamos além do conteúdo técnico:
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <p className="text-xl font-bold text-primary">
                  a gente cuida do que te sustenta por dentro.
                </p>
              </div>
              <p>
                Valorizamos a construção de uma rede real, com escuta, afeto e segurança, onde você pode crescer acompanhado.
                Acreditamos que a formação e a prática clínica não devem andar separadas, mas conectadas à sua vida, à sua
                essência e à comunidade da qual você faz parte.
              </p>
              <p>
                Mais do que cursos ou ferramentas, o NUNCA é um espaço de cocriação e crescimento conjunto. Uma rede onde você
                não precisa caminhar sozinho. Porque, no fim, o NUNCA não é só um projeto, <strong>é um caminho com gente
                  que se importa.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/20 to-cta/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              O NUNCA é um convite…
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary/80 mb-8 leading-relaxed"
            >
              Um convite para construirmos juntos um espaço mais humano, acessível e acolhedor na área da saúde.
              Seja como profissional, parceiro, estudante ou apoiador, você é bem vindo!
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-primary/90 mb-12 font-medium"
            >
              Vamos abrir mais portas e falar do que importa?
            </motion.p>
            <motion.div variants={fadeInUp}>
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
                  Faça Parte da Comunidade →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
