import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Lab = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial="initial"
        animate="animate"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-8"
          >
            Lab
          </motion.h1>

          <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed">
            <p>
              O Lab do NUNCA é nosso laboratório de pesquisa e inovação, um espaço dedicado ao
              desenvolvimento de projetos que buscam transformar a prática da nutrição.
            </p>

            <p>
              Aqui, incentivamos a curiosidade, o questionamento e a busca por novas formas de
              pensar e fazer nutrição. Acreditamos que a inovação nasce da intersecção entre
              conhecimento técnico, criatividade e compromisso social.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
              <p className="text-xl font-semibold text-primary">
                Pesquisa, inovação e compromisso com a transformação.
              </p>
            </div>

            <p>
              No Lab, desenvolvemos projetos que vão além do convencional, sempre com o objetivo
              de criar soluções que façam diferença na vida real das pessoas e na prática dos
              profissionais de nutrição.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12">
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
                Conheça Nossos Projetos →
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Lab;
