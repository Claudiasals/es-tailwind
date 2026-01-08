/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
<<<<<<< HEAD
      extend: {
        colors: {
          /* Palette personalizzata */
          "brand-purple": "#9b5de5", // titoli e pulsanti primari
          "brand-blue": "#1e40af",   // testo principale
          "brand-yellow": "#fcbf49", // hover / accenti
          "brand-gray": "#6b7280",   // testo secondario
=======
        extend: {
            colors: {
                'brand-purple': '#9b5de5', // titoli
                'brand-blue': '#1e40af',    // testo principale 
            },
            fontFamily: {
                'brand': ['Poppins', 'sans-serif'], 
            },
            spacing: {
                '32': '8rem', 
            },
>>>>>>> 7c2963f01e5142b4a902e590579cc850f3dd9924
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
  