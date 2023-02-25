/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Rubik, system-ui, Arial, sans-serif'],
    },
    colors: {
      black: '#454360',
      gray: '#8b88b1',
      'gray-dark': '#5e5c7f',
      indigo: '#6c6ce5',
      light: '#f9f9ff',
      orange: '#fd7e14',
      pink: '#f97b8b',
      salmon: '#ff4c60',
      teal: '#20c997',
      white: '#fff',
      yellow: '#f9d74c',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
};
