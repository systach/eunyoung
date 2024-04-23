/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                'work-sans': ['Work Sans', 'sans-serif'],
            },
            colors: {
                ddark: '#222222',
                dblue: '#B1B2FF',
                dpink: '#FFA1CF',
            },
            maxWidth: {
                cutoff: '1280px',
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in forwards cubic-bezier(0.165, 0.84, 0.44, 1)',
            },
        },
    },
    plugins: [],
}
