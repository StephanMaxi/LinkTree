module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'fairy-pattern' : "url('../public/linktreepackground.jpg')"
      }
    },
  },
  plugins: [],
}