/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
         red: "#ff0000",
         icon: "#000000"
        },   
  },
  plugins: [],
}

}