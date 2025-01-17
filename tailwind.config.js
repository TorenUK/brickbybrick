/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "horizontal-scroll": {
          from: {
            transform: "translate(0%)",
          },
          to: {
            transform: "translate(-100%)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
        "horizontal-scroll": "horizontal-scroll 105s linear infinite",
      },
      fontFamily: {
        custom: ["Departure"],
      },
      gridTemplateColumns: {
        artifact: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
