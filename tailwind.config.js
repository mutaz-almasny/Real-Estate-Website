/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      colors: {
        primary: "#fea925",
        textColor: "#fea928",
        secondary: "#ed8900",
        buttonColor: "#ed8520",
        iconColor: "#5d5c72",
      },
    },
  },
  plugins: [],
};
