const colors = require('tailwindcss/colors');
const customColors = require('./src/styles/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx,mdx}', './pages/**/*.{ts,tsx,mdx}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        colors: {
            ...colors,
            neutral: colors.gray,
            active: customColors.tropicalIndigo,
            hover: customColors.tangerine,
            activatable: customColors.pink,
            light: customColors.seashell,
            dark: customColors.raisinBlack,
        },
    },
};
