/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", 'sans-serif'],
        raleway: ["Raleway", 'sans-serif'],
        oleo: ["Oleo Script Swash Caps", 'system-ui'],
      },
      colors: {
        layoutBg: '#181818',
        mainBg: '#212124',
        peach: '#FA7055',
        blackGradient: '#161618',
      },
      boxShadow: {
        navbar: '0px 4px 4px 0px #FA705526',
      },
      
    },
  },
  plugins: [],
}