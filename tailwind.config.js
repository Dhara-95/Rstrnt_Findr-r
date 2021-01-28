const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grey: '#ccc',
      black: '#111',
    }
  }
};