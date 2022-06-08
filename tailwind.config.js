module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#83D483",
        secondary: "6C6C6C",
      },
      backgroundImage: {
        "tutorial-bg": "url('../src/img/main-bg.jpg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
