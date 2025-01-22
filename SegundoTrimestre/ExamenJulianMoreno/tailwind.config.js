/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      azulado: '#1f64e5',
      morado: '#712c76',
    },
    screens: {
      pm: '500px',
    },
  },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch