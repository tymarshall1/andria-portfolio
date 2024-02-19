/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#210D41",
        secondary: "#532E85",
        tertiaryOne: "#DEACF5",
        tertiaryTwo: "#9854CB",
      },
      fontFamily: {
        alexBrush: ["Alex Brush", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
        manjari: ["Manjari", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
