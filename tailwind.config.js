/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100': '25rem',
      },
      height: {
        '100': '25rem',
      }
    },
  },
  plugins: [],
}

