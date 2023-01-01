/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
