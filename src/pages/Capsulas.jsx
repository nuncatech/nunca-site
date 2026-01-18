import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Capsulas = () => {
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
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background dark:from-primary-dark/10 dark:to-background-dark"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary dark:text-primary-dark mb-6"
                    >
                        Cápsulas
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-foreground/80 dark:text-foreground-dark/80 font-medium"
                    >
                        Um universo de comunidades dentro do Núcleo pensadas para você
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
                            O que são as Cápsulas do NUNCA? 💊✨
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            <p>
                                As Cápsulas são as nossas <strong>comunidades temáticas exclusivas</strong>.
                            </p>
                            <p>
                                Cada Cápsula é um espaço vivo, criado e conduzido por um profissional, com sua identidade, seu ritmo, seu método e sua forma própria de integrar. 🧬🌿
                            </p>
                            <p>
                                Diferente da Comu.Nunca, que é mais geral, pública e aberta, a Cápsula é um espaço mais íntimo e direcionado. É onde a troca deixa de ser geral e passa a ser guiada, com foco em processo, prática e construção real. 🏗️🧱
                            </p>
                            <div className="bg-accent/10 dark:bg-accent-dark/10 border-l-4 border-accent dark:border-accent-dark p-6 my-8">
                                <p className="text-xl font-bold text-primary dark:text-primary-dark">
                                    Importante: a Cápsula não é um curso. Ela é uma COMUNIDADE de convivência! 🤝🏠
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Como funciona */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            Como funciona uma Cápsula ⚙️🤩
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-6">
                            Dentro de uma Cápsula, você encontra:
                        </p>
                        <div className="space-y-4">
                            {[
                                'Conteúdos diferentes e direcionados 🏹',
                                'Contato direto com o grupo e com o profissional que conduz 💬',
                                'Orientação e acompanhamento 👀',
                                'Estudos guiados (de acordo com a temática da Cápsula) 📚',
                                'Um espaço seguro para perguntar, errar, ajustar, testar, repensar, amadurecer ideias e fortalecer a própria prática 🛡️🌱'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-accent dark:text-accent-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                    <span className="text-foreground/80 dark:text-foreground-dark/80">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mt-6 italic">
                            Cada Cápsula é construída junto com as pessoas que estão dentro dela. 🧱❤️
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cada profissional */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
                                Cada profissional, uma Cápsula 👩‍⚕️👨‍⚕️
                            </h2>
                            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-4">
                                Cada profissional do NUNCA pode ter a sua própria Cápsula.
                            </p>
                            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                                Isso significa que você pode escolher caminhar com quem faz sentido para o seu momento, seu campo de interesse e sua fase da vida profissional. 🚶‍♀️✨
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-cta/10 to-accent/10 dark:from-cta/5 dark:to-accent-dark/10 p-8 rounded-lg"
                        >
                            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-4">
                                As Cápsulas podem:
                            </p>
                            <ul className="space-y-3 text-foreground/80 dark:text-foreground-dark/80">
                                <li>• Funcionar de forma independente 🔓</li>
                                <li>• Estarem conectadas às Colmeias, ampliando o acompanhamento 🔗</li>
                                <li>• Ter propostas completamente diferentes entre si 🎨</li>
                            </ul>
                            <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mt-6 italic">
                                Algumas pessoas participam de uma única Cápsula. Outras circulam por mais de uma, ao longo do tempo. Tudo depende de você! 😉
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diferencial */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-8">
                            O que torna uma Cápsula diferente? 🤔💫
                        </h2>
                        <p className="text-xl text-foreground/80 dark:text-foreground-dark/80 leading-relaxed mb-6">
                            Uma Cápsula não é sobre consumo de conteúdo. Ela é sobre <strong>pertencer, trocar, caminhar junto e construir em comunidade</strong>. 🏘️🤝
                        </p>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">
                            É onde você deixa de apenas observar e começa, de fato, a participar do processo interno, dando às mãos a quem está no mesmo caminho que você.
                        </p>
                        <div className="bg-primary/5 dark:bg-primary-dark/5 border border-primary/20 dark:border-primary-dark/20 p-8 rounded-lg mt-12">
                            <p className="text-xl font-semibold text-primary dark:text-primary-dark">
                                É aqui que as comunidades temáticas vivas encontram, finalmente, um lugar para ficar e onde você pode achar o seu lugar também. 🪑💖
                            </p>
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
                            Encontre sua comunidade
                        </h2>
                        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-8">
                            Explore as Cápsulas disponíveis e descubra onde você pertence.
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
                                Conhecer as Cápsulas no NUCLEO → 🚀
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Capsulas;
