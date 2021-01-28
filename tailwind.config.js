const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      grey: "#ccc",
      black: "#111",
      white: "#FFF",
      teal: "#479c9d",
      'teal-hover': "#A7D7D7",
      'teal-click': "#285758"
    },
    container: {
      center: true,
    },
  },
};
