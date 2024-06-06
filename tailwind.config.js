/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        primaryWithOpacity: "var(--bg-primary-with-opacity)",
        secondaryWithOpacity: "var(--bg-secondary-with-opacity)",
        tertiary: "#359BC2",
        greyText: "#5E6282",
      },
      screens: {
        base: "980px",
      },
      dropShadow: {
        "3xl": "27px 35px 17px rgba(0,0,0,0.2)",
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
