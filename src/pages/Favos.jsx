import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Favos = () => {
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
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cta/20 to-background dark:from-cta/10 dark:to-background-dark"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary dark:text-primary-dark mb-6"
                    >
                        Favos
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-foreground/80 dark:text-foreground-dark/80 font-medium"
                    >
                        Os mini cursos do NUNCA, para quem quer aprofundar um tema específico
                    </motion.p>
                </div>
            </motion.section>

            {/* O que são */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            O que são os FAVOS do NUNCA?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            <p>
                                Os Favos são os mini cursos do NÚCLEO do NUNCA.
                            </p>
                            <p>
                                Eles são formações focadas, pensadas para aprofundar um tema específico, desenvolver uma habilidade concreta ou organizar um recorte importante de um assunto sem precisar entrar em um percurso longo.
                            </p>
                            <div className="bg-cta/10 border-l-4 border-cta p-6 my-8">
                                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                                    Cada Favo tem começo, meio e fim. E cada um existe para resolver uma pergunta, um problema ou um interesse específico.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Por que existem */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            Por que os Favos existem
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            Porque às vezes você não quer (ou não precisa) de uma jornada longa. Você só quer entender melhor um ponto, aprender algo específico ou aprofundar um tema que já faz parte da sua prática.
                        </p>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mt-6">
                            <strong>Os Favos existem para isso: serem pontuais.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Como funcionam */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            Como funcionam os Favos
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-6">
                            Cada Favo é um mini curso com foco claro. Eles podem incluir:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                'Aulas ao vivo ou gravadas',
                                'Materiais de apoio',
                                'Exercícios ou práticas',
                                'Leituras guiadas',
                                'Espaço de troca (quando fizer sentido)',
                                'Estrutura presencial diferenciada'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-foreground/80 dark:text-foreground-dark/80">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6">
                            <p className="text-lg font-semibold text-primary dark:text-primary-dark">
                                O importante é: você entra, aprofunda, integra e sai com algo organizado.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Diferencial */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                                O que torna os Favos diferentes
                            </h2>
                            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                                Os Favos não são aulas soltas. Cada Favo existe porque existe um tema que precisa ter um espaço só dele.
                            </p>
                            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mt-4">
                                Se no final, você se apaixonar e quiser entrar na Colmeia, é uma decisão que você vai tomar com certeza.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                                Os Favos dentro do NÚCLEO
                            </h3>
                            <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                                Os Favos funcionam de forma independente, como mini cursos avulsos.
                            </p>
                            <p className="text-foreground/80 dark:text-foreground-dark/80">
                                Eles conversam com o ecossistema, mas não dependem dele.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Resumo */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="bg-gradient-to-br from-cta/10 to-accent/10 dark:from-cta/5 dark:to-accent-dark/10 p-12 rounded-2xl">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                                Em uma frase
                            </h2>
                            <p className="text-xl text-foreground/90 dark:text-foreground-dark/90 leading-relaxed mb-8">
                                Os Favos são para quando você quer conhecer melhor um tema, mas ainda não decidiu se quer uma jornada mais longa.
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
                                    Explorar os Favos no NÚCLEO →
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Favos;
