/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      lg: "976px",
    },
    colors: {
      pink: "hsl(322, 100%, 66%)",
      VeryPaleCyan: "hsl(193, 100%, 96%)",
      VeryDarkCyan: "hsl(192, 100%, 9%)",
      GrayishBlue: "hsl(208, 11%, 55%)",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
