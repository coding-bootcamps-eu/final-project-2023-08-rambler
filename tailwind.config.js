/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-accent-color-green": "#C1F000",
        "footer-color-grey": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
