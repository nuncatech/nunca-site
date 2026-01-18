import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Cursos = () => {
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
                        Cursos
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed">
                        <p>
                            Nossos cursos são pensados para fortalecer suas bases teóricas e práticas,
                            unindo conhecimento técnico atualizado com uma abordagem humanizada do cuidado.
                        </p>

                        <p>
                            Fugimos da ideia de que o aprendizado precisa ser "cada um por si" e abraçamos a
                            concepção de que, lado a lado, um ensina o outro, criando uma rede de aprendizado
                            mais sólida e completa.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
                            <p className="text-xl font-semibold text-primary">
                                Formação técnica e humanizada: conhecimento com afeto.
                            </p>
                        </div>

                        <p>
                            Cada curso é estruturado para atender necessidades reais da prática profissional,
                            com conteúdo atualizado, baseado em evidências e sempre conectado à realidade da
                            clínica nutricional.
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
                                Conheça Nossos Cursos →
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Cursos;
