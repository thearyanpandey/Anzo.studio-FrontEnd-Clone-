/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        archivo: ["Archivo Black", ...defaultTheme.fontFamily.sans],
        News:["News Cycle", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

