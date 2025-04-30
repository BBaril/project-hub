// Bethany Baril  04/12/25

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        bbTeal: '#66cccc',
        bbTealDark: '#5cb8b8',
        bbBlueSoft: '#55b6f6',
        bbBlueSoftDark: '#4da4dd',
        bbBlue: '#4776eb',
        bbBlueDark: '#406ad4',
        bbPurple: '#c175d7',
        bbPurpleDark: '#9966cc',
        bbPink: '#dc89b0',
        bbPinkDark: '#cc6696',
        bbOrange: '#f7b56e',
        bbOrangeDark: '#dea363',
        bbGreenSoft: '#78d589',
        bbGreenSoftDark: '#4ab582',
        bbGreen: '#8bce4b',
        bbGreenDark: '#5ba145',
        bbOffWhite: '#f5faff',
        bbOffWhiteSoft: '#f6fbf6',
        bbOffBlack: '#1e1e1e',
        bbOffBlackSoft: '#2b2b2b',
        bbPopSoft: '#64d8e8',
        bbPop: '#66f2ff',
      },
      fontFamily: {
        title: ['var(--font-merriweather)', 'serif'],
        body: ['"Helvetica Neue"', 'sans-serif'],
      },
      
      
    },
  },
  
  plugins: [],
}



