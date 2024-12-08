import { transform } from "typescript";

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
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
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
