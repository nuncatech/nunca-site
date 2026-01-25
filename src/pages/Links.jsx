import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Links = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const links = [
        {
            title: 'Site Oficial',
            url: 'https://www.gruponunca.com.br/',
            description: 'Conheça mais sobre o NUNCA',
            icon: '🌐'
        },
        {
            title: 'Grupão Nunca',
            url: 'https://chat.whatsapp.com/JvltjpEoDtd9Sym1LMvFEU',
            description: 'Junte-se ao nosso grupo no WhatsApp',
            icon: '💬'
        },
        {
            title: 'Comu.Nunca',
            url: 'https://nucleo.gruponunca.com.br',
            description: 'Nossa comunidade pública',
            icon: '🗣️'
        }
    ];

    return (
        <div className="min-h-screen bg-background dark:bg-background-dark transition-colors flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-2xl mx-auto">
                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* Logo/Avatar */}
                    <div className="mb-6">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark flex items-center justify-center text-4xl shadow-lg">
                            🌱
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-3 transition-colors">
                        Núcleo de Nutrição, Clínica e Atualização
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-2 transition-colors">
                        NUNCA
                    </p>

                    {/* Description */}
                    <p className="text-base text-foreground/70 dark:text-foreground-dark/70 max-w-md mx-auto leading-relaxed transition-colors">
                        Conectando estudantes e profissionais da área da saúde através de comunidade, aprendizado e afeto 💚
                    </p>
                </motion.div>

                {/* Links Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-4"
                >
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full bg-white dark:bg-muted-dark border-2 border-primary/20 dark:border-primary-dark/30 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                    <span className="text-3xl flex-shrink-0">{link.icon}</span>
                                    <div className="text-left flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-1 transition-colors group-hover:text-cta">
                                            {link.title}
                                        </h3>
                                        <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 transition-colors truncate">
                                            {link.description}
                                        </p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-primary/50 dark:text-primary-dark/50 flex-shrink-0 group-hover:text-cta transition-colors" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center mt-12 pt-8 border-t border-primary/10 dark:border-primary-dark/10"
                >
                    <p className="text-sm text-foreground/60 dark:text-foreground-dark/60 transition-colors">
                        Feito com 💚 pelo NUNCA
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Links;
