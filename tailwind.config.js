/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./game/game.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Digital Numbers"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
