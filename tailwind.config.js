/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5475F2",
        secondary: "#FFA800",
        tertiary: "#359BC2",
        greyText: "#5E6282",
      },
      screens: {
        base: "980px",
      },
      dropShadow: {
        "3xl": "27px 35px 17px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
