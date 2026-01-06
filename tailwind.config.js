/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            spacing: {
                '32': '8rem',  // p-72 (per padding ) o m-72 ( per margin)
            },
        },
    },
    plugins: [],
}

/*
p-32 → padding su tutti e 4 i lati = 18rem
m-32 → margin su tutti e 4 i lati = 18rem
mt-32 → margin-top = 18rem
mb-32 → margin-bottom = 18rem
px-32 → padding orizzontale (left + right) = 18rem
py-32 → padding verticale (top + bottom) = 18rem
*/