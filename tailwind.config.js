/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlack': '#1C2024',
        'customGray': '#767676',
        'customLighterGray': 'C4C4C4',
        'customGreen': '#578087',
        'customForestGreen': '#213B55'
      },
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
        'philosopher': ['Philosopher', 'sans-serif']
      }
    },
  },
  plugins: [],
}