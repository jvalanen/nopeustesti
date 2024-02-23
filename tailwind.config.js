/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./game/game.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
