/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbf6f3',
        primary: {
          DEFAULT: '#5c5f30',
          foreground: '#fbf6f3',
        },
        accent: {
          DEFAULT: '#ce8f8f',
          foreground: '#fbf6f3',
        },
        cta: {
          DEFAULT: '#fad02c',
          foreground: '#5c5f30',
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
    },
  },
  plugins: [],
}
