/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'color-primary': '#cfb160',
        'color-white': '#ffffff',
        'color-black': '#000000',
        'color-danger': '#ff5758',
        'color-success': '#3be58a',
        'color-bg-btn-primary': 'linear-gradient(to right bottom,#d9b432,#e8cd62)',
        'color-bg-btn-primary-hover': 'linear-gradient(to left top,#d9b432,#e8cd62)',
        'text-primary': '#333333',
        'text-link': '#cfb160',
        'color-gray-rgba-06': 'rgba(33,33,33,.6)',
        'btn-primary': '#b69f58',
        'btn-primary-hover': '#d4b155',
        'btn-active': '#debc64', 
        'btn-primary-disabled': '#4a4127',
        'btn-primary-text-disabled': '#a19f9f'
      },
    },
  },
  plugins: [],
}
