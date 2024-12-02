/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ejercicios/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1240px",
    },
  },  
  },
  plugins: [],
}

