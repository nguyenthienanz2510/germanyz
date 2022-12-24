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
        'color-primary': '#F0B90B',
        'color-white': '#ffffff',
        'color-black': '#000000',
        'color-text': '#333333',
        'color-text-light': '#EAECEF',
        'color-text-dark': '#1e2329',
        'color-text-link': '#c99400',
        'color-success': '#03a66d',
        'color-info': '#17a2b8',
        'color-warning': '#ffc107',
        'color-danger': '#cf304a',
        'color-btn-primary': '#FCD535',
        'color-bg-dark-primary': '#181A20',
        'color-bg-dark-secondary': '#0B0E11',
        'color-bg-light-hover': '#f5f5f5',
        'color-bg-dark-hover': '#2B3139'
      },
    },
  },
  plugins: [],
}
