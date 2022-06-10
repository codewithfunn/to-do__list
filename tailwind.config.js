/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Orange-custom-medium':"#fdcb6e",
        'Orange-custom-light':"#ffeaa7"
      }
    },
  },
  plugins: [],
}