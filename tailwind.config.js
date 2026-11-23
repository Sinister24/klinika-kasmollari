/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#2BC4B4',
          600: '#1A9E90',
          700: '#14756A',
          800: '#115E55',
          900: '#0A3D38',
          950: '#051F1C',
        },
        dark: {
          950: '#030705',
          900: '#060B0A',
          800: '#0A1210',
          700: '#0F1A18',
          600: '#152220',
          500: '#1C2D2A',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'slide-up':   'slideUp 0.6s ease-out',
        'fade-in':    'fadeIn 0.8s ease-out',
        'spin-slow':  'spin 20s linear infinite',
        'pulse-teal': 'pulseTeal 2s ease-in-out infinite',
        'marquee':    'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(43,196,180,0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(43,196,180,0.7)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        pulseTeal: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
