/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // include your app folder
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  present: [require("nativewind/preset")],
  
  theme: {
    extend: {},
  },
  plugins: [],
};



