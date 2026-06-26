import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  Brain,
  Users,
  Activity,
  Calendar,
  BookOpen,
  Award,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  Tv,
  ExternalLink
} from 'lucide-react';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // FAQ Questions & Answers (without platform/SaaS references)
  const faqItems = [
    {
      question: "O que é o NUNCA?",
      answer: "O NUNCA (Núcleo de Nutrição Clínica e Aplicação) é uma comunidade premium de educação continuada e prática baseada em evidências para profissionais da saúde. Somos um ecossistema projetado para conectar, atualizar e impulsionar carreiras através da ciência e da colaboração real."
    },
    {
      question: "Quem pode fazer parte da comunidade?",
      answer: "Nossa comunidade tem como foco principal os nutricionistas, mas acolhemos de braços abertos médicos, psicólogos, fisioterapeutas, educadores físicos, enfermeiros e estudantes dessas áreas que acreditam em uma prática de saúde integrada, séria e baseada em evidências."
    },
    {
      question: "Como funcionam os encontros mensais?",
      answer: "Realizamos encontros mensais em formato híbrido: presenciais em ambientes de alta qualidade e com transmissão ao vivo de alta definição para os membros que acompanham online. Nos encontros, abordamos de forma prática a discussão de casos clínicos reais, estudos de artigos científicos e painéis interativos."
    },
    {
      question: "O que é o NUCLEO?",
      answer: "O NUCLEO é a nossa comunidade de membros e a participação é 100% gratuita. É onde nos conectamos diariamente, fazemos networking, discutimos casos clínicos e trocamos experiências profissionais."
    },
    {
      question: "Como funcionam os Favos?",
      answer: "Os Favos são os nossos minicursos: formações focadas e de curta duração, pensadas para aprofundar temas clínicos específicos e desenvolver habilidades práticas para o dia a dia do consultório."
    },
    {
      question: "Como marcas ou clínicas podem patrocinar ou fazer parcerias?",
      answer: "Oferecemos oportunidades de patrocínio e parceria para marcas alinhadas com a ciência e a saúde baseada em evidências. Nossos patrocinadores ganham visibilidade em nossos encontros e eventos. Entre em contato conosco diretamente via email para saber mais."
    }
  ];

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark transition-colors duration-300 selection:bg-accent/30 selection:text-primary overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-primary/5 dark:border-primary-dark/5 bg-gradient-to-b from-background via-background to-muted/30 dark:from-background-dark dark:via-background-dark dark:to-muted-dark/10">
        
        {/* Decorative Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 dark:bg-primary-dark/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-[100px]" />
          {/* Faded Background Logo */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] flex items-center justify-center">
            <img src="/images/logo_nunca.png" alt="" className="w-[80vw] max-w-7xl select-none" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 dark:border-primary-dark/20 bg-background/50 dark:bg-background-dark/50 backdrop-blur-md text-xs font-semibold tracking-wider text-primary dark:text-primary-dark uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cta" />
              <span>O Novo Ecossistema da Saúde</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary dark:text-primary-dark leading-[1.15] tracking-tight">
              A comunidade onde profissionais da saúde <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cta to-accent dark:from-primary-dark dark:via-cta dark:to-accent-dark">
                evoluem juntos
              </span>{" "}
              através da ciência.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground-dark/80 max-w-3xl mx-auto leading-relaxed font-light">
              O NUNCA é um ecossistema de educação continuada, prática baseada em evidências e colaboração real para médicos, nutricionistas e profissionais da saúde.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="cta"
                size="xl"
                className="w-full sm:w-auto text-base group cursor-pointer"
                onClick={() => scrollToId('proximos-encontros')}
              >
                Participar do próximo encontro
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto text-base cursor-pointer"
                onClick={() => scrollToId('como-funciona')}
              >
                Conhecer a comunidade
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NOSSA MISSÃO SECTION */}
      <section id="missao" className="py-24 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-12"
          >
            {/* Guide Phrase Quote */}
            <div className="relative border-l-4 border-cta pl-8 py-4 my-10">
              <span className="absolute -top-6 -left-2 text-7xl font-serif text-cta/20 select-none">“</span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-primary dark:text-primary-dark italic leading-snug">
                Estamos construindo a comunidade que gostaríamos de ter encontrado quando começamos nossa carreira na saúde.
              </blockquote>
            </div>

            {/* User Requested Mission Text */}
            <div className="space-y-6 pt-6 border-t border-primary/5 dark:border-primary-dark/5">
              <h3 className="text-xs uppercase font-semibold text-accent dark:text-accent-dark tracking-widest">Nossa Missão</h3>
              
              <div className="space-y-6 text-xl text-foreground/80 dark:text-foreground-dark/80 leading-relaxed font-light">
                <p className="font-medium text-primary dark:text-primary-dark text-2xl font-serif">
                  O NUNCA existe para aproximar pessoas que acreditam que a saúde é construída em conjunto.
                </p>
                <p>
                  Criamos comunidades onde estudantes e profissionais aprendem, compartilham experiências e constroem relações de confiança.
                </p>
                <p>
                  Acreditamos que pacientes recebem um cuidado melhor quando diferentes profissionais trabalham como uma equipe, e não de forma isolada.
                </p>
                <p>
                  Por isso, fomentamos encontros, desenvolvemos comunidades, produzimos educação baseada em ciência e construímos tecnologia que facilita a colaboração entre pessoas.
                </p>
                <p className="font-medium text-primary dark:text-primary-dark">
                  Nossa missão é tornar essa colaboração cada vez mais natural.
                </p>
                <p className="text-2xl font-serif font-semibold text-cta pt-4">
                  Porque, no NUNCA, ninguém anda sozinho.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. COMO FUNCIONA A COMUNIDADE */}
      <section id="como-funciona" className="py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted-dark/10 border-y border-primary/5 dark:border-primary-dark/5 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-xs uppercase font-semibold text-accent dark:text-accent-dark tracking-widest">Estrutura de Conexão</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark">
              Como funciona a comunidade
            </h3>
            <p className="text-lg text-foreground/70 dark:text-foreground-dark/70 font-light">
              Conectamos profissionais da saúde no dia a dia através de três pilares inegociáveis.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Pillar 1 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-background dark:bg-background-dark border-primary/10 dark:border-primary-dark/10 p-8 flex flex-col justify-between group hover:border-cta/50 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center mb-6 text-primary dark:text-primary-dark group-hover:bg-primary/20 transition-all duration-300">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Ciência Aplicada</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 leading-relaxed font-light">
                    Discussões clínicas de alto nível baseadas rigorosamente em evidências científicas atualizadas, com foco em traduzir artigos densos em condutas práticas de consultório.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary dark:text-primary-dark flex items-center gap-1 font-semibold">
                  <span>Evidência acima de achismos</span>
                </div>
              </Card>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-background dark:bg-background-dark border-primary/10 dark:border-primary-dark/10 p-8 flex flex-col justify-between group hover:border-cta/50 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent-dark/10 flex items-center justify-center mb-6 text-accent dark:text-accent-dark group-hover:bg-accent/20 transition-all duration-300">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Prática Clínica Real</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 leading-relaxed font-light">
                    Estudos de caso reais de consultório, onde os membros compartilham diagnósticos difíceis, evolução de pacientes e recebem orientações de profissionais mais experientes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent dark:text-accent-dark flex items-center gap-1 font-semibold">
                  <span>Casos e desfechos reais</span>
                </div>
              </Card>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-background dark:bg-background-dark border-primary/10 dark:border-primary-dark/10 p-8 flex flex-col justify-between group hover:border-cta/50 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-cta/15 flex items-center justify-center mb-6 text-cta group-hover:bg-cta/25 transition-all duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary dark:text-primary-dark mb-4">Colaboração Plural</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 leading-relaxed font-light">
                    Integração genuína entre médicos, nutricionistas, psicólogos e educadores físicos. Um ambiente seguro, sem ego acadêmico, onde todos aprendem e ensinam.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-cta flex items-center gap-1 font-semibold">
                  <span>Comunidade horizontal</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. EVENTOS PRESENCIAIS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-cta" />
                <span>Encontros Físicos Premium</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark leading-tight">
                Eventos presenciais de alto impacto
              </h2>
              <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed font-light">
                Imersões mensais exclusivas desenhadas para proporcionar o máximo de atualização científica e networking real. Realizados em ambientes estruturados e acolhedores, nossos encontros presenciais reúnem os membros para discutir diagnósticos complexos e interagir diretamente com palestrantes renomados.
              </p>
              <ul className="space-y-3 font-light text-foreground/85 dark:text-foreground-dark/80">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Networking qualificado e geração de parcerias clínicas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Material de apoio impresso e espaço para debates abertos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Experiência premium (coffee breaks focados em integração)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-primary/10 via-cta/20 to-accent/15 dark:from-primary-dark/5 dark:via-cta/10 dark:to-accent-dark/5 shadow-2xl">
                <div className="relative bg-background/90 dark:bg-background-dark/95 backdrop-blur-xl rounded-xl p-8 sm:p-10 border border-primary/10 dark:border-primary-dark/10 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-md text-xs font-semibold">PRESENCIAL</span>
                    <span className="text-xs text-foreground/50 dark:text-foreground-dark/50">São Paulo, SP</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark">Experiência Imersiva</h4>
                    <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 font-light leading-relaxed">
                      "A dinâmica presencial do NUNCA se distancia de congressos passivos. Cada cadeira faz parte de uma mesa de discussão clínica. Sentamos juntos para desatar nós de casos reais de consultório."
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <div className="h-1 bg-cta/40 rounded-full" />
                    <div className="h-1 bg-primary/40 dark:bg-primary-dark/40 rounded-full" />
                    <div className="h-1 bg-accent/40 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. EVENTOS ONLINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 dark:bg-muted-dark/5 border-t border-primary/5 dark:border-primary-dark/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="relative p-1 rounded-2xl bg-gradient-to-bl from-accent/20 via-primary/10 to-cta/20 dark:from-accent-dark/5 dark:via-primary-dark/5 dark:to-cta/5 shadow-2xl">
                <div className="relative bg-background/90 dark:bg-background-dark/95 backdrop-blur-xl rounded-xl p-8 sm:p-10 border border-primary/10 dark:border-primary-dark/10 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark rounded-md text-xs font-semibold">ON-DEMAND & AO VIVO</span>
                    <span className="text-xs text-foreground/50 dark:text-foreground-dark/50">Online</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-serif font-bold text-primary dark:text-primary-dark">Transmissão Síncrona</h4>
                    <p className="text-sm text-foreground/70 dark:text-foreground-dark/70 font-light leading-relaxed">
                      "Para quem não reside na capital ou prefere acompanhar à distância, nossa transmissão entrega áudio cristalino, múltiplos ângulos de câmera e interação ativa em tempo real."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60 dark:text-foreground-dark/50 pt-2">
                    <Tv className="w-4 h-4 text-cta" />
                    <span>Gravações salvas em alta definição na área de membros</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-widest">
                <Tv className="w-4 h-4 text-cta" />
                <span>Acesso Digital de Qualquer Lugar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark leading-tight">
                Eventos online interativos e acessíveis
              </h2>
              <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 leading-relaxed font-light">
                Entendemos a rotina corrida de quem atende em consultório ou estuda. Por isso, todas as discussões do LAB e encontros possuem transmissão síncrona impecável. O participante online faz perguntas por texto ou áudio e participa ativamente das mesmas dinâmicas que os participantes presenciais.
              </p>
              <ul className="space-y-3 font-light text-foreground/85 dark:text-foreground-dark/80">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Transmissão simultânea profissional sem interrupções</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Acesso direto ao chat de discussões científicas e enquetes virtuais</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  <span>Hospedagem imediata dos episódios gravados para os membros</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. BENEFÍCIOS PARA MEMBROS */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-xs uppercase font-semibold text-accent dark:text-accent-dark tracking-widest">Ecossistema de Apoio</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark">
              Benefícios exclusivos para membros
            </h3>
            <p className="text-lg text-foreground/70 dark:text-foreground-dark/70 font-light">
              Estruturamos vantagens focadas para acompanhar o seu crescimento clínico e formação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300">
              <div className="text-cta">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary dark:text-primary-dark">Acesso à Comunidade (Gratuito)</h4>
              <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 font-light leading-relaxed">
                Espaço de convivência diária para networking, trocas clínicas diárias e divulgação de novidades e eventos científicos em primeira mão.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300">
              <div className="text-cta">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary dark:text-primary-dark">Certificados Automáticos</h4>
              <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 font-light leading-relaxed">
                Emissão instantânea de certificados com comprovação de carga horária para todos os encontros mensais e palestras assistidas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300">
              <div className="text-cta">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary dark:text-primary-dark">Encontros do LAB Inclusos</h4>
              <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 font-light leading-relaxed">
                Acesso completo aos encontros mensais (presenciais ou online) sem custos adicionais aos membros ativos.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300">
              <div className="text-cta">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary dark:text-primary-dark">Favos (Minicursos)</h4>
              <p className="text-sm text-foreground/75 dark:text-foreground-dark/70 font-light leading-relaxed">
                Acesso facilitado e descontos exclusivos nos minicursos voltados a temas específicos da rotina clínica e prática terapêutica.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-accent/25 text-accent dark:text-accent-dark text-[10px] font-bold tracking-wider rounded uppercase">Em Breve</div>
              <div className="text-cta opacity-80">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary/80 dark:text-primary-dark/80">Biblioteca de Gravações</h4>
              <p className="text-sm text-foreground/60 dark:text-foreground-dark/60 font-light leading-relaxed">
                Acervo contendo as gravações dos encontros anteriores, resumos científicos e materiais complementares para estudo no seu tempo.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-8 rounded-xl border border-primary/5 dark:border-primary-dark/10 bg-muted/10 dark:bg-muted-dark/5 space-y-4 hover:bg-muted/30 dark:hover:bg-muted-dark/10 transition-colors duration-300 relative overflow-hidden group">
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-accent/25 text-accent dark:text-accent-dark text-[10px] font-bold tracking-wider rounded uppercase">Em Breve</div>
              <div className="text-cta opacity-80">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary/80 dark:text-primary-dark/80">Clube de Benefícios</h4>
              <p className="text-sm text-foreground/60 dark:text-foreground-dark/60 font-light leading-relaxed">
                Vantagens, convênios e descontos especiais com marcas parceiras e apoiadoras do ecossistema NUNCA.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PARCEIROS E PATROCINADORES */}
      <section className="py-16 bg-muted/20 dark:bg-muted-dark/5 border-y border-primary/5 dark:border-primary-dark/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-foreground/45 dark:text-foreground-dark/40 mb-8">
            Parceiros institucionais que apoiam a ciência e a evolução da saúde
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-65 dark:opacity-50">
            <div className="text-base font-serif font-bold tracking-tight text-primary dark:text-primary-dark">ClinTech</div>
            <div className="text-base font-serif font-bold tracking-tight text-primary dark:text-primary-dark">Evidência Labs</div>
            <div className="text-base font-serif font-bold tracking-tight text-primary dark:text-primary-dark">NutriLife</div>
            <div className="text-base font-serif font-bold tracking-tight text-primary dark:text-primary-dark">ActiveHealth</div>
            <div className="text-base font-serif font-bold tracking-tight text-primary dark:text-primary-dark">Vanguarda Médica</div>
          </div>
        </div>
      </section>

      {/* 9. PRÓXIMOS ENCONTROS (Redesigned to show CTA redirecting to community) */}
      <section id="proximos-encontros" className="py-28 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-cta" />
              <span>Calendário e Agendas do LAB</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark">
              Quer saber a programação dos próximos encontros?
            </h3>
            
            <p className="text-lg text-foreground/75 dark:text-foreground-dark/80 max-w-2xl mx-auto leading-relaxed font-light">
              Os detalhes sobre os próximos temas do LAB, datas, locais dos encontros presenciais e links para a transmissão online são divulgados e atualizados diretamente dentro da nossa comunidade.
            </p>
            
            <div className="pt-4">
              <Button asChild variant="cta" size="xl" className="cursor-pointer">
                <a href="https://nucleo.gruponunca.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Acessar a Comunidade NUCLEO (Gratuito)
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-muted/20 dark:bg-muted-dark/5 border-t border-primary/5 dark:border-primary-dark/5 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-xs uppercase font-semibold text-accent dark:text-accent-dark tracking-widest">Respostas para suas Dúvidas</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-dark">
              Perguntas frequentes (FAQ)
            </h3>
            <p className="text-lg text-foreground/70 dark:text-foreground-dark/70 font-light">
              Esclareça as dúvidas mais comuns sobre a comunidade, os encontros e o formato de aprendizado.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-primary/10 dark:border-primary-dark/15 rounded-lg overflow-hidden bg-background dark:bg-background-dark transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-serif font-semibold text-lg text-primary dark:text-primary-dark hover:bg-muted/10 dark:hover:bg-muted-dark/5 transition-colors focus:outline-none"
                >
                  <span>{item.question}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cta flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-foreground/80 dark:text-foreground-dark/80 font-light leading-relaxed border-t border-primary/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-primary/10 via-cta/5 to-accent/15 dark:from-primary-dark/5 dark:via-cta/10 dark:to-accent-dark/5 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cta/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary dark:text-primary-dark leading-tight">
            Pronto para fazer parte da evolução?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground-dark/80 max-w-2xl mx-auto leading-relaxed font-light">
            Não compre apenas um ingresso. Entre em um ecossistema sustentado por profissionais sérios, que colocam a ciência em prática e cooperam mutuamente.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild variant="cta" size="xl" className="w-full sm:w-auto text-lg cursor-pointer">
              <a href="https://nucleo.gruponunca.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Juntar-se à Comunidade NUCLEO (Gratuito)
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto text-lg cursor-pointer bg-background/50 backdrop-blur-md">
              <a href="mailto:contato@gruponunca.com.br" className="flex items-center gap-2">
                Seja um Patrocinador
                <ExternalLink className="w-4 h-4 text-primary dark:text-primary-dark" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
