// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
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
        baseOscura: "#E9E5DC",
        baseMedia: "#F2FEFA",
        baseClara: "#FBFAF8",
      },
    },
  },
  plugins: [],
};

export default config;
