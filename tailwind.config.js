/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1BE6B",
        one_d4: "#DFDDD4",
        two_4a: "#2B304A",
        three_8b: "#5B7F8B",
        four_7b: "#53577B",
      },
      fontSize: {
        xs_next: "0.8125rem",
        base_next: "1.0625rem",
      },
      fontFamily: {
        viga: ["Viga", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-one": "linear-gradient(270deg, #D2E467 0%, #689F92 100%)",
        "gradient-two": "linear-gradient(135deg, #6CA191 0%, #CFE269 100%)",
        "gradient-three": "linear-gradient(180deg, #F8C571 0%, #D7A655 100%) ",
        "gradient-four":
          " linear-gradient(180deg, rgba(37, 38, 50, 0.67) 0%, #0F1D29 100%)",
        "gradient-five": "linear-gradient(180deg, #606060 0%, #1C2731 100%)",
        "gradient-six": "linear-gradient(180deg, #F6C36F 0%, #D9A757 100%)",
      },
      borderRadius: {
        10: "0.625rem",
      },
    },
  },
  plugins: [],
};
