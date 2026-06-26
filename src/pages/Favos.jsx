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
                        Os minicursos do NUNCA, para quem quer aprofundar um tema específico da área da saúde
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            O que são os Favos? 🍯📒
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed font-light">
                            <p>
                                Os Favos são os <strong>minicursos</strong> de curta duração e alta densidade prática oferecidos pelo NUNCA.
                            </p>
                            <p>
                                Eles são desenhados para aprofundar um tema específico da prática clínica, desenvolver uma habilidade concreta ou organizar um recorte importante de um assunto de forma ágil.
                            </p>
                            <div className="bg-cta/10 border-l-4 border-cta p-6 my-8">
                                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                                    É conhecimento direto, prático e aplicável, permitindo que você estude no seu próprio ritmo.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Características */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                            Vantagens dos Favos ✨
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🎯", title: "Objetividade", desc: "Conteúdo focado no que realmente importa na prática." },
                            { icon: "💻", title: "Flexibilidade", desc: "Aulas estruturadas para o seu dia a dia." },
                            { icon: "📜", title: "Certificado", desc: "Comprovação de horas para a sua formação." },
                            { icon: "💰", title: "Acessibilidade", desc: "Modelos acessíveis para estudantes e recém-formados." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background dark:bg-background-dark p-6 rounded-lg text-center shadow-md border-t-4 border-primary dark:border-primary-dark hover:-translate-y-1 transition-transform"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-2">{item.title}</h3>
                                <p className="text-sm text-foreground/80 dark:text-foreground-dark/80">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por que existem */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed font-light">
                            Porque nem toda necessidade de aprendizado exige uma jornada longa de especialização. Muitas vezes, o profissional ou estudante precisa apenas compreender de forma aprofundada um recorte clínico, aprender um protocolo específico ou dominar uma nova ferramenta diagnóstica.
                        </p>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mt-6 font-semibold">
                            Os Favos existem para preencher essa lacuna de forma pontual e focada.
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
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-6 font-light">
                            Cada Favo aborda um tema claro e bem delimitado, incluindo:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                'Aulas práticas e objetivas',
                                'Materiais e guias de apoio para consulta rápida',
                                'Estudos de casos práticos e aplicados',
                                'Indicações de leituras científicas fundamentais',
                                'Espaço para tirar dúvidas do tema específico'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-foreground/80 dark:text-foreground-dark/80 font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6">
                            <p className="text-lg font-semibold text-primary dark:text-primary-dark">
                                O objetivo principal é: você entra, aprofunda seu conhecimento em um assunto delimitado e sai com ferramentas práticas para sua rotina de atendimento.
                            </p>
                        </div>
                    </motion.div>
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
                                Tem interesse em aprofundar seus conhecimentos?
                            </h2>
                            <p className="text-xl text-foreground/90 dark:text-foreground-dark/90 leading-relaxed mb-8 font-light">
                                Os Favos são para quem deseja ir direto ao ponto e adquirir novas ferramentas científicas e práticas para a conduta clínica.
                            </p>
                            <Button
                                asChild
                                variant="cta"
                                size="xl"
                                className="text-lg cursor-pointer"
                            >
                                <a
                                    href="https://nucleo.gruponunca.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Conhecer Favos Disponíveis →
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
