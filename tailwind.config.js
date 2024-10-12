/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#F3BDA1",
        'secondary': "#000000",
        'tertiary': "#F5F5F5"
      }
    },
  },
  plugins: [],
}

