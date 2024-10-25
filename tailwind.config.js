/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-400": "#8D8D99",
      "gray-500": "#60606C",
      "zinc-900": "#18181B",
      "green-400": "#4ADE80",
      "green-500": "#22C55E",
      "white": "#FFFFFF"
    },
    extend: {},
    fontFamily: {
      "sans": ["Archivo Narrow", "serif"],
      "serif": ["Bebas Neue", "serif"]
    }
  },
  plugins: [],
}

