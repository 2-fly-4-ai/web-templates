/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "450",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        c_yellow: "rgb(255, 255, 100)",
        c_white: "rgb(255, 255, 255)",
        c_black: "rgb(18, 18, 18)",
      },
      fontFamily: {
        comf: ["Comfortaa", "sans-serif"],
        lora: ["Lora", "serif"],
        nun: ["Nunito", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        monte: ["Montserrat", "sans-serif"],
        montsub: ["Montserrat Subrayada", "sans-serif"],
        sans: ["Montserrat Subrayada", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1188px",
        "2xl": "1188px",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
