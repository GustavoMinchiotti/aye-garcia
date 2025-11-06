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

/*
 Nota: Las claves de color personalizadas usan camelCase para asegurar compatibilidad.
 Tailwind permite usar nombres con guiones entre comillas (ej: "acento-2"),
 pero esas keys no se resuelven correctamente en tiempo de ejecución y las
 clases generadas no son reconocidas por el navegador.
 Para mantener consistencia con las utilidades definidas en globals.css
 y evitar fallas de renderizado, todos los nombres se definen en camelCase.
*/
