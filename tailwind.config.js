/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-gray': '#2B2B2B',
      'dark-gray': '#333333',
      green: '#009379',
      blue: '#3366FF',
      yellow: '#FFDF90',
      red: '#FF6250',
      purple: '#BFAFF2',
      'light-gray': '#C4C4C4',
      white: '#FFFFFF'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

