/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        patternLight: "url('/src/Assets/special/background.svg')",
        patternDark: "url('/src/Assets/special/backgroundDark.svg')",
      },
    },
  },
  plugins: [
   
    require("daisyui"),
   
  ],
};
