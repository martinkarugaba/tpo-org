/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Quicksand', 'sans-serif'],
        secondary: ['Balsamiq Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#4FC1EB',
        pri: '#50B9BC',
        secondary: '#FFA000',
      },
    },
  },
  plugins: [],
};
