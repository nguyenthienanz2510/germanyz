/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1356px',
      },
      padding: {
        DEFAULT: '12px',
        sm: '0',
      },
    },
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
        'color-bg-dark-header': '#000b27',
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
      },
    },
  },
  plugins: [],
}
