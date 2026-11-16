/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#D98CA3',       // Rosa queimado
          'rose-light': '#F7E8ED',// Rosa claro
          wine: '#6D2945',       // Vinho elegante
          white: '#FFFDFC',      // Branco suave
          black: '#242124',      // Preto suave
          'wine-dark': '#4F1B31',
          'wine-light': '#8A3759',
          'rose-muted': '#E4A7BA',
          'surface': '#FAF4F6',
          'card': '#FFFFFF',
          'border': '#EBD5DD',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(109, 41, 69, 0.07), 0 5px 15px -3px rgba(36, 33, 36, 0.04)',
        'soft-lg': '0 20px 40px -10px rgba(109, 41, 69, 0.12), 0 10px 20px -5px rgba(36, 33, 36, 0.05)',
        'rose-glow': '0 0 25px rgba(217, 140, 163, 0.35)',
        'wine-glow': '0 0 25px rgba(109, 41, 69, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
