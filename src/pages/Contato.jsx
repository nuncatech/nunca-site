import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contato = () => {
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
            Contato
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            Vamos abrir mais portas juntos? Entre em contato conosco
          </motion.p>
        </div>
      </motion.section>

      {/* Informações de Contato */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-4">
              Fale Conosco
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 max-w-2xl mx-auto">
              Estamos sempre prontos para conversar sobre educação, formação profissional e oportunidades de colaboração.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted dark:bg-muted-dark p-8 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-2">E-mail</h3>
              <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">Para dúvidas e informações</p>
              <a
                href="mailto:contato@gruponunca.com.br"
                className="text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 font-medium transition-colors break-all"
              >
                contato@gruponunca.com.br
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-muted dark:bg-muted-dark p-8 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-2">Instagram</h3>
              <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 mb-4">Acompanhe nosso dia a dia</p>
              <a
                href="https://www.instagram.com/nunca.nutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 font-medium transition-colors"
              >
                @nunca.nutri
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
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
              Oportunidades de Colaboração
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80">
              Descubra as diferentes formas de fazer parte do NUNCA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Para Estudantes</h3>
              <ul className="space-y-3 mb-6 text-foreground/80 dark:text-foreground-dark/80">
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Programas de formação e mentorias
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Mini cursos (Favos)
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Participação no LAB mensal
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Comunidades temáticas (Cápsulas)
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Oportunidades para Estudantes">
                  Saiba mais
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Para Profissionais</h3>
              <ul className="space-y-3 mb-6 text-foreground/80 dark:text-foreground-dark/80">
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Mentorias modulares (Colmeia)
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Cursos de aprofundamento
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Networking profissional
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Integração em comunidade
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Oportunidades para Profissionais">
                  Saiba mais
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Para Instituições</h3>
              <ul className="space-y-3 mb-6 text-foreground/80 dark:text-foreground-dark/80">
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Parcerias educacionais
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Projetos colaborativos
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Consultoria especializada
                </li>
                <li className="flex items-start">
                  <span className="text-accent dark:text-accent-dark mr-2">•</span>
                  Desenvolvimento de protocolos
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Parcerias Institucionais">
                  Saiba mais
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary dark:text-primary-dark mb-6">
              Vamos abrir mais portas juntos?
            </h2>
            <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-8">
              Seja qual for sua necessidade ou interesse, estamos aqui para construir pontes e nutrir conexões significativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="mailto:contato@gruponunca.com.br">Enviar e-mail</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.instagram.com/nunca.nutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
