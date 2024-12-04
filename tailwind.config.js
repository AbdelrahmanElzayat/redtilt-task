/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slowSpin: "spin 15s linear infinite", // دوران بطيء (5 ثوانٍ)
      },
      colors: {
        primary: {
          light: "#750909", // اللون الأساسي في الوضع الفاتح
          dark: "#750909", // اللون الأساسي في الوضع الداكن
        },
        secondary: {
          light: "#FFC107",
          dark: "#F59E0B",
        },
        background: {
          light: "#FFFFFF",
          dark: "#120101",
        },
        text: {
          light: "#333333",
          dark: "#E5E7EB",
        },
        red: "#F92828",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
