/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontSize: {
        bio: "13px",
        QR: "15px",
      },
      colors: {
        coal: "#191919",
        pri: "#8e949e",
        whyte: "hsl(0, 0%, 100%)",
        Lgray: "hsl(212, 45%, 89%)",

        WineBack: "#0f1732",
        LeftG: "#0f2735",
        MidP: "#202148",
        RightG: "#0e380e",

        Redd: "#e74175",
        Smokey: "#090C02",
        Ash: "#BBC5AA",
        Tan: '#DDE2C6',
        Onyx: '#403F4C',
        Uranian: '#A5D8FF',
        Aero: '#05B2DC',


        Bluee: "#1a0b52",
        Purpp: "#5e0e8c",
        Logo: "#b86bac",
        Plum: "#8a3468",
        DarkG: "#202020",
        TS: "#222b35",
        React: "#28373b",
        OpenAI: "#444654",
        Git: "#2c2320",
        LiteG: "#414141",

      },
      fontFamily: {
        inter: ["inter", "serif"],
        mont: ["Montserrat", "sans-serif"],
        pop: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
