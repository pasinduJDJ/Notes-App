/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Color Used in the Project
      colors:{
        primary : "#2BB5FF",
        Secondary : "#EF863E",
      }
    },
  },
  plugins: [],
}

