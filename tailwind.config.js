/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'custom-pink': '#f58220',
        'custom-black': '#171717',
        'custom-white': '#fff',
      },
    },
  },
  plugins: [],
};
