import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Colmeia = () => {
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
                        Colmeia
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-foreground/80 dark:text-foreground-dark/80 font-medium"
                    >
                        As Mentorias Modulares do NUNCA foram criadas para que você tenha liberdade enquanto aprende e aprenda no seu tempo!
                    </motion.p>
                </div>
            </motion.section>

            {/* O que é */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            O que é a Colmeia do NUNCA?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            <p>
                                A Colmeia é o sistema de mentorias modulares do NUNCA.
                            </p>
                            <p>
                                Ela nasceu a partir de uma pergunta simples: <strong>Por que engessar o conhecimento se duas pessoas não aprendem da mesma forma a mesma coisa?</strong>
                            </p>
                            <p>
                                A Colmeia parte da ideia de que formação clínica é algo que se constrói com movimento e com sua neuroplasticidade sendo testada de diversas maneiras.
                            </p>
                            <p>
                                Cada pessoa constrói seu aprendizado de um jeito diferente, no seu tempo e a partir das suas próprias necessidades. Por isso, o NUNCA não criou mentorias engessadas, com grade fechada e iguais para todo mundo.
                            </p>
                            <div className="bg-cta/10 border-l-4 border-cta p-6 my-8">
                                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                                    Criamos um sistema vivo, flexível e estruturado, onde você constrói sua própria jornada de aprendizado ao longo do tempo, com direção, liberdade e suporte.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Arquitetura */}
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
                            A arquitetura da Colmeia
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80">
                            Cada Colmeia é formada por três elementos principais:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                                1. O Eixo Principal
                            </h3>
                            <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                                A Célula Base - É a entrada da Colmeia, o tema central, o território por onde você começa.
                            </p>
                            <ul className="space-y-2 text-sm text-foreground/70 dark:text-foreground-dark/70">
                                <li>• Visão geral do campo</li>
                                <li>• Base conceitual</li>
                                <li>• Método e linguagem comum</li>
                                <li>• Direção inicial do percurso</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4">🔷</div>
                            <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                                2. As Células
                            </h3>
                            <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                                Módulos que se conectam ao Eixo Principal. Cada célula aprofunda um aspecto específico do tema.
                            </p>
                            <p className="text-sm text-foreground/70 dark:text-foreground-dark/70">
                                Você escolhe quais células adicionar conforme sua necessidade e momento de aprendizado.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4">🪟</div>
                            <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                                3. Janela de Expansão
                            </h3>
                            <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4">
                                Momento que se abre ao final do Eixo Principal para continuar seu desenvolvimento.
                            </p>
                            <p className="text-sm text-foreground/70 dark:text-foreground-dark/70">
                                Adquira novas células, explore outros temas, e mantenha-se conectado ao ecossistema.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Como funciona */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            Como a jornada acontece
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            <p>
                                Você entra na Colmeia pelo Eixo Principal. Caminha, estuda, integra, pratica e, conforme suas dúvidas e necessidades aparecem, novas células são liberadas.
                            </p>
                            <p>Você vai construindo sua trilha:</p>
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-cta mr-2">→</span>
                                    Escolhendo células
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cta mr-2">→</span>
                                    Aprofundando temas
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cta mr-2">→</span>
                                    Mudando de foco quando precisa
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cta mr-2">→</span>
                                    Integrando áreas diferentes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cta mr-2">→</span>
                                    Respeitando seu ritmo
                                </li>
                            </ul>
                            <div className="bg-primary/5 dark:bg-primary-dark/5 border-l-4 border-primary dark:border-primary-dark p-6 my-8">
                                <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                                    Duas pessoas nunca percorrem exatamente a mesma Colmeia.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Suporte */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            O suporte e a estrutura do NUNCA
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-6">
                            Durante todo o percurso, você conta com a estrutura e o cuidado do NUNCA:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Entrevista de inscrição e orientação inicial',
                                'Suporte durante todo o processo',
                                'Organização e entrega de materiais',
                                'Comunicação clara sobre etapas e acessos',
                                'Grupo de acompanhamento com outros alunos',
                                'Apoio técnico e humano para que você não caminhe sozinho(a)'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-foreground/80 dark:text-foreground-dark/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                            Pronto para construir sua jornada?
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-8">
                            A Colmeia é estrutura com liberdade. Profundidade com escolha. Acompanhamento com autonomia. Ela cresce com você.
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
                                Conhecer a Colmeia no NÚCLEO →
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Colmeia;
