/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        display: ['Tenor Sans', 'serif'],
        serif: ['Cormorant Garamond', 'serif']
      },
      colors: {
        primary: {
          DEFAULT: '#8B7355',
          light: '#A68B5B',
          dark: '#6B5B42'
        },
        accent: {
          DEFAULT: '#D4C4A8',
          light: '#E8DCC6',
          dark: '#B8A082'
        },
        background: {
          DEFAULT: '#FFFEF7',
          dark: '#2D2A26'
        },
        text: {
          DEFAULT: '#FFFEF7',
          muted: '#8B7355',
          dark: '#3C3530'
        },
        ivory: {
          50: '#FFFEF7',
          100: '#FDF8E7',
          200: '#F5EDD3',
          300: '#E8DCC6',
          400: '#D4C4A8',
          500: '#B8A082',
          600: '#8B7355',
          700: '#6B5B42',
          800: '#4A453C',
          900: '#3C3530'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'aurora': 'aurora 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 115, 85, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 196, 168, 0.8)' }
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(212, 196, 168, 0.1))',
        'cyber-grid': 'linear-gradient(rgba(139, 115, 85, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 115, 85, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 115, 85, 0.3)',
      },
    },
  },
  plugins: [],
} 