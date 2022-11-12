/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
         red: "#ff0000",
         icon: "#000000",
         yellow: "#ffcd45"

        },   

        fontFamily: {
          font: ["Poppins", "sans-serif"],
      },
      width: {
        w: "26rem",
        wt: "100rem",
    },
  },
  plugins: [],
}

}