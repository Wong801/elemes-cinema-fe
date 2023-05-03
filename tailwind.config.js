/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ]
  ,
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#C0222E",
        },
        gray: {
          dark: "#191C1F",
          light: "#232C32",
        },
      },
    },
  },
  plugins: [],
}

