/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCF3EC",
        secondary: "#CDCEBE",
        tertiaryOne: "#E0E1D1",
      },
      fontFamily: {
        alexBrush: ["Alex Brush cursive", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
        manjari: ["Manjari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
