/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      gridTemplateRows: {
        'custom': '10vh 10vh 10vh 35vh 15vh',
      },
      gridTemplateColumns: {
        'custom': '1fr 1fr 2fr 2fr',
      },
      colors: {
        primary: "#000078",
        secondary: "#73edff",
      },
    },
    
  },
  plugins: [],
}

