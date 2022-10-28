/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./docs/**/*.{vue,js,ts,jsx,tsx}',
        './docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
}
