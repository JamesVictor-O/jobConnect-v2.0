/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      "primaryblue": "#9FBFFD",
      "Dark":"#07063D",
      "Gray": "#DOD5E0",
      "primaryOrange":"#FFDECB"
    },
    screens:{
       'sm':'640px',
      'md': '760px',
      'lg': '1024px',
       'xl':'1280px'
    },
    extend: {},
  },
  plugins: [],
}

