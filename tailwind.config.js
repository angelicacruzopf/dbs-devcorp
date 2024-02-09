/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./img/banner-mobile.png')",
        "hero-desktop": "url('./src/img/banner-desktop.png')",
      },

      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      colors: {
        primary: "#85614A",
        secondary: "#453226",
        third: "#91866E",
        fourth: "#D2B589",

        darkGray: "#191A1B",
        mediumGray: "#292D32",
        neutralGray: "#666666",
        lightGray: "#D9D9D9",
        grayWhite: "#F0F0F0",
      },
      height: {
        100: "26rem",
        120: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
