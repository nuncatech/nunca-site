/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#fbf6f3',
          dark: '#1a1a1a',
        },
        foreground: {
          DEFAULT: '#2d2d2d',
          dark: '#f5f5f5',
        },
        primary: {
          DEFAULT: '#5c5f30',
          foreground: '#fbf6f3',
          dark: '#a4a77d',
        },
        accent: {
          DEFAULT: '#ce8f8f',
          foreground: '#fbf6f3',
          dark: '#d4a5a5',
        },
        cta: {
          DEFAULT: '#f4a259',
          foreground: '#2d2d2d',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          dark: '#2d2d2d',
        },
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
