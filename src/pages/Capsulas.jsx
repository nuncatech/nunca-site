import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Capsulas = () => {
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
                        Cápsulas
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed">
                        <p>
                            As Cápsulas do NUNCA são conteúdos rápidos e acessíveis, pensados para caber no seu
                            dia a dia e te manter atualizado sem sobrecarga.
                        </p>

                        <p>
                            São pílulas de conhecimento prático que você pode consumir quando e onde quiser:
                            no intervalo entre atendimentos, no trajeto para o trabalho, ou naquele momento
                            de pausa que você reserva para si.
                        </p>

                        <div className="bg-cta/20 border-l-4 border-cta p-6 my-8">
                            <p className="text-xl font-semibold text-primary">
                                Conhecimento acessível para o seu dia a dia profissional.
                            </p>
                        </div>

                        <p>
                            Democratizar o acesso à informação de qualidade é um dos nossos compromissos.
                            Com as Cápsulas, você tem acesso a conteúdos relevantes, baseados em evidências
                            e apresentados de forma clara e objetiva.
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
                                Acesse as Cápsulas →
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Capsulas;
