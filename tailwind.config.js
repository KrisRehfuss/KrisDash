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
        Bluee: "#1a0b52",
        Purpp: "#85177a",
        Logo: "#b86bac",
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
