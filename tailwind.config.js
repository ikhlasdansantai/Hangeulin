/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: {
          default: "0",
        },
      },
      colors: {
        primaryBlack: "#1A1A1A",
        secondaryYellow: "#F2C033",
        thirdYellow: "#F4C237",
        fourYellow: "#E1A90C",
        secondCream: "#FEF7E5",
        secondaryBlue: "#056AAD",
        thirdBlue: "#045285",
        pink: "#EC7589",
        creamClr: "#FAE3A4",
        paragraphClr: "rgba(0, 0, 0, 0.8)",
      },
      padding: {
        standart: "1rem 1.5rem",
      },
    },
  },
  plugins: [],
};
