/** @type {import('tailwindcss').Config} */
// Tailwind configuration.
// All brand colors and fonts live here so you can re-theme the whole site
// by editing just this file.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled directly from the AJ logo
        navy: {
          DEFAULT: '#161a4a', // deep navy background
          900: '#10133a',
          800: '#161a4a',
          700: '#1e2459',
          600: '#2a3170',
        },
        gold: {
          DEFAULT: '#c89a2c', // primary gold accent
          light: '#e3bd5a',
          dark: '#a87f1e',
        },
        cream: '#f7f5ef', // warm off-white page background
        ink: '#10133a', // deep-navy text color for the light theme
      },
      fontFamily: {
        // Distinctive luxury pairing (loaded in index.html)
        display: ['Fraunces', 'serif'], // editorial serif for headings
        sans: ['Manrope', 'system-ui', 'sans-serif'], // clean body font
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(200, 154, 44, 0.35)',
        card: '0 20px 50px -20px rgba(16, 19, 58, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'spin-slow': 'spinSlow 18s linear infinite',
      },
    },
  },
  plugins: [],
}
