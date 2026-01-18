import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Reusable Feature List Item with icons
 */
export const FeatureItem = ({ children, icon = 'check' }) => {
    const icons = {
        check: 'M5 13l4 4L19 7',
        arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
        circle: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    };

    return (
        <li className="flex items-start gap-3">
            <svg
                className="w-6 h-6 text-cta flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={icons[icon]}
                />
            </svg>
            <span className="text-foreground/80 dark:text-foreground-dark/80">
                {children}
            </span>
        </li>
    );
};

FeatureItem.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOf(['check', 'arrow', 'circle']),
};

/**
 * Highlight box with border
 */
export const HighlightBox = ({ children, variant = 'primary' }) => {
    const variants = {
        primary: 'bg-primary/5 dark:bg-primary-dark/5 border-primary dark:border-primary-dark',
        cta: 'bg-cta/10 border-cta',
        accent: 'bg-accent/10 dark:bg-accent-dark/10 border-accent dark:border-accent-dark',
    };

    return (
        <div className={`${variants[variant]} border-l-4 p-6 my-8`}>
            {children}
        </div>
    );
};

HighlightBox.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'cta', 'accent']),
};

/**
 * Stats or metrics card
 */
export const MetricCard = ({ icon, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted dark:bg-muted-dark p-8 rounded-lg text-center hover:shadow-lg transition-all"
        >
            {icon && <div className="text-5xl mb-4">{icon}</div>}
            <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-2">
                {title}
            </h3>
            {description && (
                <p className="text-sm text-foreground/70 dark:text-foreground-dark/70">
                    {description}
                </p>
            )}
        </motion.div>
    );
};

MetricCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
