/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verdoscuro': '#1E431D',
        'verdolight': '#8CA576',
        'beige-light': '#D8D1C1',
        'beige-medium': '#D9BD9C',
        'marrone': '#A68365',
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}
