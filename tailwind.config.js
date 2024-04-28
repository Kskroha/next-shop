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
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gold: "#a18a68",
        "light-grey": "#efefef",
        "dark-grey": "#707070",
      },
      spacing: {
        162: "40rem",
        99: "25rem",
      },
    },
  },
};
