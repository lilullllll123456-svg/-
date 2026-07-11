import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: {
          950: '#020817',
          900: '#051225',
          800: '#08203a',
          700: '#0d3152'
        },
        glow: {
          cyan: '#67e8f9',
          blue: '#38bdf8',
          violet: '#a78bfa',
          mint: '#5eead4'
        }
      },
      boxShadow: {
        'jelly-soft': '0 0 42px rgba(94, 234, 212, 0.18)',
        'jelly-card': '0 24px 80px rgba(2, 8, 23, 0.45)'
      },
      backgroundImage: {
        'deep-radial':
          'radial-gradient(circle at 20% 20%, rgba(103, 232, 249, 0.16), transparent 32%), radial-gradient(circle at 80% 15%, rgba(167, 139, 250, 0.14), transparent 30%), radial-gradient(circle at 50% 80%, rgba(94, 234, 212, 0.11), transparent 36%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
