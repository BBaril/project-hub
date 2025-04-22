// Bethany Baril  04/12/25

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bbCyan: '#00ffff', // custom color for BB
        bbGreen: '#0fcc66',
        bbOrange: '#ffbe0b',
        bbCitrine: '#ffff99',
        bbSoftRose: '#ff93cb',
        bbCyanDarker: '#19e5e6',
        bbSkyLavender: '#85b3ff',
        bbBlueGrotto: '#3a86ff',
        bbOffWhite: '#f5faff',
        bbCharcoal: '#1e1e1e',
        bbMidnightIndigo: '#2a2e45',
        bbPurple: '#bfb5ff',
        bbLiteYellow: '#fefeff',
      },
      fontFamily: {
        title: ['Lora', 'serif'],
        body: ['"Helvetica Neue"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}



