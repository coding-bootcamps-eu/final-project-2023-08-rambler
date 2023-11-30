/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background-image": "url('@/assets/HomeBackground.png')",
      },
      colors: {
        "primary-accent-color-green": "#C1F000",
        "footer-color-grey": "#f7f7f7",
        "button-color": "#A8A8A8",
        "multiple-choice-red": "#FF0000",
        "multiple-choice-green": "#789503",
      },
      boxShadow: {
        black: "0 0 3px 3px #000",
        back: "0 0 3px 3px #A8A8A8",
        continue: "0 0 3px 3px #C1F000",
      },
    },
  },
  plugins: [],
};
