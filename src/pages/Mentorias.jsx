import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Mentorias = () => {
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
                        Mentorias
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="space-y-6 text-lg text-primary/80 leading-relaxed">
                        <p>
                            Nosso programa de mentorias oferece apoio individualizado e em grupo para profissionais e
                            estudantes que buscam crescimento na área da nutrição.
                        </p>

                        <p>
                            Acreditamos que o caminho profissional não precisa ser solitário. Através da mentoria,
                            criamos um espaço seguro onde você pode compartilhar dúvidas, desafios e conquistas com
                            quem já trilhou caminhos semelhantes.
                        </p>

                        <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                            <p className="text-xl font-semibold text-primary">
                                Crescer acompanhado é crescer mais forte.
                            </p>
                        </div>

                        <p>
                            As mentorias no NUNCA não são apenas sobre técnica e conhecimento. São sobre escuta,
                            acolhimento e construção de uma prática profissional que faça sentido para você e para
                            quem você atende.
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
                                Saiba Mais na Comunidade →
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Mentorias;
