/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        one_d4: "#DFDDD4",
        two_4a: "#2B304A",
        three_8b: "#5B7F8B",
        four_7b: "#53577B",
      },
      fontSize: {
        base_next: "1.0625rem",
      },
      fontFamily: {
        viga: ["Viga", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-one": "linear-gradient(270deg, #D2E467 0%, #689F92 100%)",
      },
      borderRadius: {
        10: "0.625rem",
      },
    },
  },
  plugins: [],
};
