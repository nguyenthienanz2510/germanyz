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
        'color-primary': '#0dabff',
        'color-secondary': '#FF595A',
        'color-white': '#ffffff',
        'color-black': '#000000',
        'color-text-light': '#feffff',
        'color-text-dark': '#1e2329',
        'color-success': '#03a66d',
        'color-info': '#17a2b8',
        'color-warning': '#ffc107',
        'color-danger': '#cf304a',
        'color-bg-dark-primary': '#10141c',
        'color-bg-dark-secondary': '#161b26',
        'color-bg-dark-secondary-active': '#222733',
        'color-bg-dark-header': '#000b27'
      },
    },
  },
  plugins: [],
}
