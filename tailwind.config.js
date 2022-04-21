module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // [, '#11488e', '#032550'];
          primary: "#03045E",
          secondary: "red",
          accent: "green",
          neutral: "gray",
          "base-100": "#161616",
          "primary-content": "#DCDCDC",
        },
      },
    ],
  },
};
