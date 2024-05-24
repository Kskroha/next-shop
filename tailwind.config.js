module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["DMSans", "Arial", "sans-serif"],
      body: ["DMSans", "Arial", "sans-serif"],
    },
    gridTemplateColumns: {
      "2xl": "repeat(auto-fit, minmax(380px, 1fr))",
      xl: "repeat(auto-fit, minmax(344px, 1fr))",
      lg: "repeat(auto-fit, minmax(255px, 1fr))",
      sm: "repeat(auto-fit, minmax(136px, 1fr))",
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gold: "#a18a68",
        "light-grey": "#efefef",
        "dark-grey": "#707070",
        red: "#D82700",
      },
      spacing: {
        162: "40rem",
        99: "25rem",
      },
      height: {
        88: "22rem",
      },
    },
  },
};
