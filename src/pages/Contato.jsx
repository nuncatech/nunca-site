import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contato = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cta/20 to-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6"
          >
            Contato
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-primary/80"
          >
            Vamos abrir mais portas juntos? Entre em contato conosco
          </motion.p>
        </div>
      </motion.section>

      {/* Informações de Contato */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Fale Conosco
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Estamos sempre prontos para conversar sobre nutrição, educação e oportunidades de colaboração.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">E-mail</h3>
              <p className="text-sm text-primary/70 mb-4">Para dúvidas e informações</p>
              <a
                href="mailto:contato@gruponunca.com.br"
                className="text-accent hover:text-accent/80 font-medium transition-colors break-all"
              >
                contato@gruponunca.com.br
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Instagram</h3>
              <p className="text-sm text-primary/70 mb-4">Acompanhe nosso dia a dia</p>
              <a
                href="https://www.instagram.com/nunca.nutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                @nunca.nutri
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Notion</h3>
              <p className="text-sm text-primary/70 mb-4">Acesse nossos materiais</p>
              <a
                href="https://nuncanutri.notion.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                nuncanutri.notion.site
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-background p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Comunidade</h3>
              <p className="text-sm text-primary/70 mb-4">Faça parte do NUCLEO</p>
              <a
                href="https://nucleo.gruponunca.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-medium transition-colors break-words"
              >
                nucleo.gruponunca.com.br
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Oportunidades de Colaboração
            </h2>
            <p className="text-lg text-primary/80">
              Descubra as diferentes formas de fazer parte do NUNCA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Para Estudantes</h3>
              <ul className="space-y-3 mb-6 text-primary/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Programas de formação e cursos
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Mentorias profissionais
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Participação em projetos de pesquisa
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Oportunidades para Estudantes">
                  Saiba mais
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Para Profissionais</h3>
              <ul className="space-y-3 mb-6 text-primary/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Cursos de especialização
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Colaboração em pesquisas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Networking profissional
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Oportunidades para Profissionais">
                  Saiba mais
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Para Instituições</h3>
              <ul className="space-y-3 mb-6 text-primary/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Parcerias educacionais
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Projetos colaborativos
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Consultoria especializada
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Parcerias Institucionais">
                  Saiba mais
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Para Pacientes</h3>
              <ul className="space-y-3 mb-6 text-primary/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Consultas nutricionais
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Acompanhamento continuado
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Abordagem humanizada
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:contato@gruponunca.com.br?subject=Agendamento de Consulta">
                  Agendar consulta
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
              Vamos abrir mais portas juntos?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Seja qual for sua necessidade ou interesse, estamos aqui para construir pontes
              e nutrir conexões significativas.
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
