/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
     "./src/**/*.{jsx,js}",
    "./public/**/*.html",
    ],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        'Planet': 'linear-gradient(to-t, #PlanetO, #Pinkk, #PlanetDark)',

      },
      fontSize: {
        bio: "13px",
        QR: "15px",
      },
      colors: {
        coal: "#191919",
        pri: "#8e949e",
        whyte: "hsl(0, 0%, 100%)",
        Lgray: "hsl(212, 45%, 89%)",
        whiteish: "#fef0ed",

        WineBack: "#0f1732",
        LeftG: "#0f2735",
        MidP: "#202148",
        RightG: "#0e380e",
        DarkG: "#202020",
        Ind: '#2a315a',
        Orbit: '#df07f8',

        PlanetO: '#fbd6c7',
        PlanetDark: '#fad8cb',
        DarkTeal: '#1f3f4d',
        LiteTeal: '#21414f',
        Treal:'#67c7d8',
        Treal2: '#1f9285',
        Tred: '#7f7fca',
        Tann: '#e8cbb9',
        Tro: '#fb7b74',

        JarBlue: '#0d152b',
        JarPink: '#fa5093',

        FeatherO: '#f57329',


        Redd: "#e74175",
        Smokey: "#090C02",
        Ash: "#BBC5AA",
        Tan: "#DDE2C6",
        Onyx: "#403F4C",
        Uranian: "#A5D8FF",
        Aero: "#05B2DC",
        Apricot: "#FFD6BA",
        Gold: "#ffd347",
        Intrins: "#8c4485",
        LiteBlue: "#c0defe",
        CityBlu: "#4571d9",
        LB: "#e2eefd",
        Pinkk: "#fcb6d6",
        IceBlue: "#b1b3c5",
        BlueG: "#151f29",
        Peri: "#9493a7",
        Teel: "#6b9a94",
        Licorice: "#1F1300",
        Space: "#2D3047",

        Splatter: "#7a7acd",
        Purp: "#30213e",
        Blu: "#76bad3",
        Pinq: "#b18098",
        Q: "#cc3dfa",
        Sub: "#314d7a",

        FlowerInd: "#141625",
        FlowerPurple: "#654053",
        FlowerSun: "#f9d4bc",
        FlowerRed: "#ca4b65",
        FlowerO: "#b6586b",

        OrbPurple: '#3d223f',
        OrbPurple2: '#be0fb2',
        OrbPurple3: '#6b2ff1',
        OrbBlue: '#177fb6',
        OrbPink: '#fd297e',
        OrbBlack: '#2e2f2e',
        
        OrbTan: '#f8e2ca',
        OrbBrown: '#c2906f',
        TreeSun: '#f7e1d4',
        OrbDark: '#533b33',


        Bluee: "#1a0b52",
        Purpp: "#5e0e8c",
        Logo: "#b86bac",
        Plum: "#8a3468",
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
  plugins: [
    require("tailwind-scrollbar-hide"),
    // require("daisyui"),
  ]
};
