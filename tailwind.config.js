/** @type {import('tailwindcss').Config} */
/* il doppio asterisco è uncommento speciale che serve a dare tipo e suggerimenti all’editor. 
In pratica dice: “Ehi, questo file è un oggetto di configurazione Tailwind”. */

export default {
    theme: {
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
        },
    },
    plugins: [],
}


/*
p-32 → padding su tutti e 4 i lati = 8rem
m-32 → margin su tutti e 4 i lati = 8rem
mt-32 → margin-top = 8rem
mb-32 → margin-bottom = 8rem
px-32 → padding orizzontale (left + right) = 8rem
py-32 → padding verticale (top + bottom) = 8rem
*/