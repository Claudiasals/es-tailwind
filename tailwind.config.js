/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // aggiunto dark mode
  darkMode: 'media',

  theme: {
    extend: {
      colors: {
        'brand-purple': '#9b5de5', // titoli e bordo superiore card
        'brand-blue': '#1e40af',    // testo principale e pulsanti
        'brand-yellow': '#fcbf49',  // pulsanti hover / accenti
        'card-blue': '#A7C7E7',     // sfondo card 1
        'card-orange': '#FFD8A7',   // sfondo card 2
        'card-yellow': '#FFF5A7',   // sfondo card 3
        'card-blue-hover': '#84B4E0', // hover pulsanti azzurro
        'card-orange-hover': '#FFC87C', // hover pulsanti arancione
      },
      fontFamily: {
        brand: ['Poppins', 'sans-serif'],
      },
      spacing: {
        32: '8rem',
      },
    },
  },
  plugins: [],
}
