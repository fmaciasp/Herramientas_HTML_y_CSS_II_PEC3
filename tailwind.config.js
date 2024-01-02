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
    extend: {},
    
  },
  plugins: [],
}

