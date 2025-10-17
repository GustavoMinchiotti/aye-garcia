/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acento1: "#E69F45",
        acento2: "#F35530",
        contraste1: "#222222",
        contraste2: "#3B3B3B",
        contraste3: "#515151",
        contraste4: "#626262",
        baseOscura: "#ECE2D4",
        baseMedia: "#F8F1E7",
        baseClara: "#FCF8F3",
      },
    },
  },
  plugins: [],
};

export default config;
