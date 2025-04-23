// Bethany Baril  04/12/25

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bbCyan: '#5eead4',
        bbGreen: '#4ade80',
        bbOrange: '#fbbf24',
        bbCitrine: '#fef08a',
        bbSoftRose: '#f9a8d4',
        bbCyanDarker: '#2dd4bf',
        bbSkyLavender: '#a5b4fc',
        bbBlueGrotto: '#60a5fa',
        bbOffWhite: '#f8fafc',
        bbCharcoal: '#1f2937',
        bbMidnightIndigo: '#334155',
        bbPurple: '#c4b5fd',
        bbLiteYellow: '#fefce8',
        bbTest: '#00ffff',
        bbTest2: '#19e5e6'
      },
      fontFamily: {
        title: ['Lora', 'serif'],
        body: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}



