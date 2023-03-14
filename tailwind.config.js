/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      }
    }
  },
  plugins: [],
}
