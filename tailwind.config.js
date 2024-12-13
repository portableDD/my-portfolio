/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": '330px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        contact: '0px 4px 4px 8px #FA705540'
      },

    },
  },
  plugins: [],
}