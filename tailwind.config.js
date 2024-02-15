/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4475F2",
        secondary: "#FFA800",
        secondaryLight: "#ffca00",
        secondaryDark: "#ff8400",
        greyText: "#5E6282",
        // ...
      },
      screens: {
        base: "980px",
        // => @media (min-width: 980px) { ... }
      },
      dropShadow: {
        "3xl": "27px 35px 17px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
