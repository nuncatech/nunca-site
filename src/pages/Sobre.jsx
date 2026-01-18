import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Sobre = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6"
          >
            Sobre Nós
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-primary/80"
          >
            Conheça nossa história, missão e os valores que guiam o NUNCA
          </motion.p>
        </div>
      </motion.section>

      {/* Missão e Valores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
              Nossa Missão
            </h2>
            <p className="text-lg text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Transformar barreiras em pontes, conectando conhecimento científico atualizado com prática
              clínica humanizada, formando profissionais competentes e oferecendo cuidado nutricional de excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent/5 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Excelência</h3>
              <p className="text-primary/80">
                Compromisso com conhecimento científico atualizado e prática profissional de alta qualidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Humanização</h3>
              <p className="text-primary/80">
                Cuidado centrado na pessoa, com escuta ativa, afeto e respeito à individualidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-cta/10 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Comunidade</h3>
              <p className="text-primary/80">
                Crescimento em rede, onde profissionais e estudantes se apoiam mutuamente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
              <p>
                O NUNCA nasceu do sonho de criar um espaço integrado de formação, pesquisa e
                prática em nutrição. A ideia surgiu da percepção de que era necessário um novo
                modelo de atuação que conectasse de forma mais efetiva a academia com a prática clínica.
              </p>
              <p>
                Desde o início, nossa proposta foi inovadora: criar diferentes espaços complementares
                que se retroalimentam, garantindo que conhecimento teórico, pesquisa científica, formação
                profissional e prática clínica caminhem juntos.
              </p>
              <p>
                Hoje, o NUNCA é uma realidade em crescimento, com profissionais dedicados e uma comunidade
                engajada de estudantes, profissionais e pacientes que acreditam em nossa missão de transformar
                a nutrição através do conhecimento e da humanização.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
              Faça parte da nossa história
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Junte-se a nós nesta jornada de transformação da nutrição.
            </p>
            <Button
              asChild
              variant="cta"
              size="lg"
            >
              <a href="/contato">Entre em contato</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
