/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        strawberry: {
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff7070',
          500: '#ff3838',
          600: '#ff0f0f',
          700: '#e50000',
          800: '#b80000',
          900: '#990000',
          950: '#550000',
        },
        earth: {
          50: '#f8f7f4',
          100: '#efeae2',
          200: '#ded3c3',
          300: '#cbb79e',
          400: '#b5987b',
          500: '#a28163',
          600: '#8d6b53',
          700: '#735646',
          800: '#61483d',
          900: '#554433',
        },
        growth: {
          50: '#f4f9f4',
          100: '#e3eee4',
          200: '#c6dfc9',
          300: '#9cc8a1',
          400: '#6fae77',
          500: '#4b9155',
          600: '#3a7845',
          700: '#32633b',
          800: '#2d5033',
          900: '#25422b',
          950: '#132516',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'grow-slow': 'grow 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'fade-in-slow': 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};