/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5475F2",
        secondary: "#FFA800",
        greyText: "#5E6282",
      },
      screens: {
        base: "980px",
      },
      dropShadow: {
        "3xl": "27px 35px 17px rgba(0,0,0,0.2)",
      },
      height: {
        800: "800px",
      },
      maxHeight: {
        "mh-min": "640px",
        "mh-custom": "1080px",
      },
      maxWidth: {
        600: "600px",
        "mw-min": "640px",
        "mw-custom": "1920px",
      },
    },
  },
  plugins: [],
};
