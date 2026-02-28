import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const IOS_URL = 'https://apps.apple.com/br/app/nunca-nucleo/id6758273413';
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.gruponunca.comunidade&hl=pt_BR&pli=1';
const ANDROID_DEEP_LINK = 'market://details?id=com.gruponunca.comunidade&hl=pt_BR';
const FALLBACK_URL = 'https://nucleo.gruponunca.com.br';

function detectPlatform() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
    if (/android/i.test(ua)) return 'android';
    return 'desktop';
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.12 } },
};

const stores = [
    {
        id: 'ios',
        href: IOS_URL,
        label: 'Disponível na',
        storeName: 'App Store',
        icon: <AppleIcon />,
        badge: 'iPhone & iPad',
    },
    {
        id: 'android',
        href: ANDROID_URL,
        label: 'Disponível no',
        storeName: 'Google Play',
        icon: <PlayIcon />,
        badge: 'Android',
    },
];

const AppRedirect = () => {
    const [platform, setPlatform] = useState(null);

    useEffect(() => {
        const p = detectPlatform();
        setPlatform(p);
        if (p === 'ios') window.location.href = IOS_URL;
        else if (p === 'android') window.location.href = ANDROID_DEEP_LINK;
    }, []);

    const isMobile = platform === 'ios' || platform === 'android';

    return (
        <div className="min-h-screen bg-background dark:bg-background-dark transition-colors flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark flex items-center justify-center text-5xl shadow-lg mb-6">
                        🌱
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-3 transition-colors">
                        Núcleo NUNCA
                    </h1>

                    <p className="text-base text-foreground/70 dark:text-foreground-dark/70 leading-relaxed transition-colors">
                        {isMobile
                            ? 'Redirecionando para a loja…'
                            : 'Baixe nosso app e faça parte da nossa comunidade de saúde e nutrição. 💚'}
                    </p>
                </motion.div>

                {/* Store buttons */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-4 mb-8"
                >
                    {stores.map((store) => {
                        const isCurrentPlatform = platform === store.id;
                        return (
                            <motion.a
                                key={store.id}
                                href={store.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-4 w-full p-5 rounded-xl border-2 shadow-md hover:shadow-xl transition-all duration-300 group ${isCurrentPlatform
                                    ? 'bg-white dark:bg-muted-dark border-primary dark:border-primary-dark'
                                    : 'bg-white dark:bg-muted-dark border-primary/20 dark:border-primary-dark/30'
                                    }`}
                            >
                                <span className="text-primary dark:text-primary-dark flex-shrink-0 transition-colors">
                                    {store.icon}
                                </span>

                                <div className="text-left flex-1 min-w-0">
                                    <p className="text-xs text-foreground/50 dark:text-foreground-dark/50 mb-0.5 transition-colors">
                                        {store.label}
                                    </p>
                                    <p className="text-lg font-semibold text-primary dark:text-primary-dark transition-colors group-hover:text-cta">
                                        {store.storeName}
                                    </p>
                                </div>

                                {isCurrentPlatform && (
                                    <span className="text-xs font-semibold text-cta bg-cta/10 border border-cta/30 px-3 py-1 rounded-full flex-shrink-0">
                                        Seu dispositivo
                                    </span>
                                )}

                                <ExternalLink className="w-5 h-5 text-primary/40 dark:text-primary-dark/40 flex-shrink-0 group-hover:text-cta transition-colors" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Divider + web fallback */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center pt-6 border-t border-primary/10 dark:border-primary-dark/10"
                >
                    <p className="text-sm text-foreground/50 dark:text-foreground-dark/50 mb-3 transition-colors">
                        ou acesse pelo navegador
                    </p>
                    <a
                        href={FALLBACK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cta hover:underline transition-colors"
                    >
                        nucleo.gruponunca.com.br →
                    </a>
                </motion.div>

            </div>
        </div>
    );
};

/* ── Icons ── */

function AppleIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.37.21.8.21 1.17 0l12.72-7.35-2.55-2.55L3.18 23.76zM.96 1.27C.36 1.63 0 2.29 0 3.04v17.92c0 .75.36 1.41.96 1.77l.1.06 10.04-10.04v-.24L1.06 1.21l-.1.06zM23.16 10.67l-2.73-1.58-2.82 2.82 2.82 2.82 2.74-1.58c.78-.45.78-1.03 0-1.48zM4.35.24L17.07 7.59l-2.55 2.55L4.35.24z" />
        </svg>
    );
}

export default AppRedirect;
