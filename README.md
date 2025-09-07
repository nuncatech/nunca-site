# NUNCA - Núcleo de Nutrição, Clínica e Atualização

Site institucional do NUNCA, um núcleo dedicado à formação, pesquisa e prática em nutrição.

## 🌟 Sobre o Projeto

O NUNCA é um projeto inovador que integra quatro frentes formativas:

- **LAB**: Laboratório de Pesquisa e Inovação em Nutrição
- **Raiz**: Formação Básica e Fundamental em Nutrição  
- **Aurora**: Especialização e Aperfeiçoamento Profissional
- **Núcleo**: Atendimento Clínico e Consultoria Especializada

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento SPA
- **CSS3** - Estilização com variáveis CSS e grid/flexbox
- **Google Fonts** - Tipografia (Lora e Montserrat)

## 🎨 Design System

### Paleta de Cores
- **Fundo**: `#fbf6f3` (Branco off-white)
- **Texto Principal**: `#5c5f30` (Verde)
- **Texto Secundário**: `#333333` (Cinza escuro)
- **Destaque Primário**: `#ce8f8f` (Rosa)
- **Destaque Secundário**: `#fad02c` (Amarelo)

### Tipografia
- **Títulos**: Lora (serif)
- **Corpo do texto**: Montserrat (sans-serif)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Navegação principal
│   ├── Footer.jsx      # Rodapé com links
│   └── Card.jsx        # Componente de card
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Lab.jsx         # Frente LAB
│   ├── Raiz.jsx        # Frente Raiz
│   ├── Aurora.jsx      # Frente Aurora
│   ├── Nucleo.jsx      # Frente Núcleo
│   ├── Sobre.jsx       # Sobre nós
│   └── Contato.jsx     # Contato
└── assets/             # Recursos estáticos
```

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nunca-site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

### Preview da Build

```bash
npm run preview
# ou
yarn preview
```

## 📱 Responsividade

O site foi desenvolvido com design responsivo, funcionando perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Acessibilidade

- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos em imagens
- Estrutura semântica HTML5
- Focus visible para elementos interativos

## 🔧 Personalização

### Adicionando Novos Componentes

1. Crie o arquivo em `src/components/`
2. Implemente o componente seguindo o padrão:
```jsx
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      {/* Conteúdo */}
    </div>
  );
};

export default ComponentName;
```

### Adicionando Novas Páginas

1. Crie o arquivo em `src/pages/`
2. Adicione a rota em `src/App.jsx`
3. Atualize a navegação em `src/components/Header.jsx`

### Modificando Cores

Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --cor-fundo: #fbf6f3;
  --cor-texto-principal: #5c5f30;
  /* ... outras variáveis */
}
```

## 📞 Contato

- **E-mail**: nuncanutricao@gmail.com
- **Instagram**: [@nunca.nutricao](https://www.instagram.com/nunca.nutricao/)
- **Notion**: [nuncanutri.notion.site](https://nuncanutri.notion.site/)

## 📄 Licença

Este projeto foi desenvolvido para o NUNCA - Núcleo de Nutrição, Clínica e Atualização.

---

*"Nunca paramos de nutrir o que importa."*