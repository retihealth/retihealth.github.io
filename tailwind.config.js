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
          primary: "#11488e",
          "base-content": "#f6f6f6",
          "primary-content": "#f6f6f6",
        },
      },
    ],
  },
};
