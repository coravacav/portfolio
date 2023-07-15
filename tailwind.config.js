/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx,mdx}', './pages/**/*.{ts,tsx,mdx}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            colors: require('./src/styles/colors'),
        },
    },
};
