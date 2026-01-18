# NUNCA - Educação Profissional em Nutrição

> Transformando barreiras em pontes

Site institucional do NUNCA (Núcleo de Nutrição, Clínica e Atualização), um projeto de integração entre estudantes e profissionais da área da saúde focado em educação profissional e formação continuada.

## 🌟 Sobre o Projeto

O NUNCA é uma plataforma educacional B2B que oferece:

- **LAB**: Laboratório de ideias mensal (online e presencial)
- **Colmeia**: Mentorias modulares personalizadas
- **Favos**: Mini cursos focados em temas específicos
- **Cápsulas**: Comunidades temáticas de aprendizado

## 🚀 Tecnologias

- **Vite 7.1.4** - Build tool ultra-rápido
- **React 19** - Biblioteca UI
- **React Router DOM** - Roteamento SPA
- **Tailwind CSS 3** - Framework CSS utility-first
- **Framer Motion** - Animações declarativas
- **shadcn/ui** - Componentes UI reutilizáveis

## 🎨 Design System

### Cores

**Light Mode:**
- Background: `#fbf6f3`
- Primary: `#5c5f30` (Verde oliva)
- Accent: `#ce8f8f` (Rosa seco)
- CTA: `#f4a259` (Laranja educacional)

**Dark Mode:**
- Background: `#1a1a1a`
- Primary: `#a4a77d`
- Accent: `#d4a5a5`
- CTA: `#f4a259`

### Tipografia
- **Títulos**: Lora (serif)
- **Corpo**: Montserrat (sans-serif)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/           # Componentes reutilizáveis
│   │   ├── Layout.jsx    # Section, Container, SectionHeader
│   │   └── UIComponents.jsx  # FeatureItem, HighlightBox, MetricCard
│   ├── ui/               # Componentes shadcn/ui
│   │   ├── button.jsx
│   │   └── card.jsx
│   ├── ThemeContext.jsx  # Context para dark mode
│   ├── ThemeToggle.jsx   # Toggle dark/light
│   ├── Header.jsx
│   └── Footer.jsx
├── lib/
│   ├── animations.js     # Variantes Framer Motion
│   ├── constants.js      # Constantes do site
│   └── utils.js          # Funções utilitárias
├── pages/
│   ├── Home.jsx          # Página inicial
│   ├── Lab.jsx           # LAB
│   ├── Colmeia.jsx       # Mentorias
│   ├── Favos.jsx         # Cursos
│   ├── Capsulas.jsx      # Comunidades
│   ├── Sobre.jsx         # Sobre o NUNCA
│   └── Contato.jsx       # Contato
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone <url-do-repositorio>
cd nunca-site

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:5173

### Build para Produção

```bash
npm run build
npm run preview
```

## 🐳 Docker

```bash
# Desenvolvimento com hot reload
docker-compose up

# Parar containers
docker-compose down
```

Acesse: http://localhost:3000

## 🌐 Deploy

O site está configurado para deploy automático no Vercel:
- ✅ Deploy automático a cada push na `main`
- ✅ Preview deploys para Pull Requests
- ✅ Domínio customizado: www.gruponunca.com.br
- ✅ SSL automático

Ver [deploy-guide.md](./.gemini/antigravity/brain/.../deploy-guide.md) para instruções detalhadas.

## 📚 Bibliotecas Principais

| Biblioteca | Versão | Propósito |
|------------|--------|-----------|
| react | ^19.0.0 | UI Framework |
| vite | ^7.1.4 | Build Tool |
| tailwindcss | ^3.4.17 | Styling |
| framer-motion | ^11.16.0 | Animações |
| react-router-dom | ^7.1.3 | Roteamento |
| clsx | ^2.1.1 | Class names |
| tailwind-merge | ^2.5.5 | Merge Tailwind classes |

## ✨ Features

- ✅ Dark mode com persistência
- ✅ Animações suaves (Framer Motion)
- ✅ Design responsivo (mobile-first)
- ✅ SEO otimizado
- ✅ Acessibilidade (ARIA labels)
- ✅ Performance otimizada
- ✅ Componentes reutilizáveis
- ✅ TypeScript-ready (PropTypes)

## 🎯 Posicionamento

O NUNCA é focado exclusivamente em **educação profissional B2B**:

- ✅ Formação de estudantes de nutrição
- ✅ Desenvolvimento profissional contínuo
- ✅ Comunidades de aprendizado
- ✅ Integração educacional

**Não oferecemos:**
- ❌ Atendimento clínico
- ❌ Consultas nutricionais
- ❌ Serviços B2C

## 📞 Contato

- **E-mail**: contato@gruponunca.com.br
- **Instagram**: [@nunca.nutri](https://www.instagram.com/nunca.nutri/)
- **Comunidade**: [NÚCLEO](https://nucleo.gruponunca.com.br)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📈 Performance

**Build Stats (Produção):**
- HTML: 2.07 kB (gzip: 0.78 kB)
- CSS: 23.10 kB (gzip: 4.52 kB)
- JS: 424.40 kB (gzip: 125.26 kB)

## 🤝 Contribuindo

Este é um projeto privado do NUNCA. Para contribuições internas:

1. Crie uma branch: `git checkout -b feature/nova-feature`
2. Commit suas mudanças: `git commit -m 'feat: adicionar nova feature'`
3. Push: `git push origin feature/nova-feature`
4. Abra um Pull Request

## 📄 Licença

© 2026 NUNCA - Núcleo de Nutrição, Clínica e Atualização. Todos os direitos reservados.

---

*"A gente cuida do que te sustenta por dentro."*