/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Anton', 'sans-serif'],
    },
    extend: {
      colors:{
      },
      backgroundImage: {
        galaxy: "url('/img/galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 5%, #43E7AD 90%, #E1D55D 5%)',
        'shadow-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 98%)',
      },
    },
  },
  plugins: [],
}