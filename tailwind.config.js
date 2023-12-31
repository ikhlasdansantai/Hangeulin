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
      },
      padding: {
        standart: "1rem 1.5rem",
      },
    },
  },
  plugins: [],
};
