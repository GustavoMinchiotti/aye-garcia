/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'acento-1': '#E69F45',
        'acento-2': '#F35530',
        'contraste-1': '#222222',
        'contraste-2': '#3B3B3B',
        'contraste-3': '#515151',
        'contraste-4': '#626262',
        'base-oscura': '#E9E5DC',
        'base-media': '#F2FEFA',
        'base-clara': '#FBFAF8',
      },
    },
  },
  plugins: [],
}
