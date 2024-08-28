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
      },
      boxShadow: {
        'custom': '0px 10px 30px rgba(0, 0, 0, 0.26)',
        'custom-text': '5px 10px 45px rgba(0, 0, 0, 0.56)'
      },
    },
  },
  plugins: [],
}