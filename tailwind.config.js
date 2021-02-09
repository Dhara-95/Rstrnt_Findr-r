const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ["active"],
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
      "teal-hover": "#A7D7D7",
      "teal-click": "#285758",
    },
    container: {
      center: true,
    },
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    scale: {
      130: "1.3",
    },
  },
};
