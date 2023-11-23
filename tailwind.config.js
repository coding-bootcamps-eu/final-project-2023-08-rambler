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
      },
    },
  },
  plugins: [],
};
