/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          /* Palette personalizzata */
          "brand-purple": "#9b5de5", // titoli e pulsanti primari
          "brand-blue": "#1e40af",   // testo principale
          "brand-yellow": "#fcbf49", // hover / accenti
          "brand-gray": "#6b7280",   // testo secondario
        },
        fontFamily: {
          brand: ["Poppins", "sans-serif"],
        },
        spacing: {
          32: "8rem",
        },
      },
    },
    plugins: [],
  }
  