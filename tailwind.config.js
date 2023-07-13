/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx,mdx}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            keyframes: {
                waveleft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50px)' },
                },
                waveright: {
                    '0%': { transform: 'translateX(50px)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                waveleft: 'waveleft 3s linear infinite',
                waveright: 'waveright 3s linear infinite',
            },
        },
    },
};
