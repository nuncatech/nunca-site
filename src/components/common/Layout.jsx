import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Reusable section wrapper with consistent spacing and animations
 */
export const Section = ({ children, className = '', bgColor = 'bg-background dark:bg-background-dark', ...props }) => {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor} ${className}`} {...props}>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    bgColor: PropTypes.string,
};

/**
 * Container with max-width constraint
 */
export const Container = ({ children, className = '', size = 'default' }) => {
    const sizeClasses = {
        sm: 'max-w-3xl',
        default: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
    };

    return (
        <div className={`${sizeClasses[size]} mx-auto ${className}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl']),
};

/**
 * Animated section header
 */
export const SectionHeader = ({ title, subtitle, centered = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${centered ? 'text-center' : ''}`}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    centered: PropTypes.bool,
};
