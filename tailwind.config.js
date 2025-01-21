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
        "border-spin": "border-spin 9s linear infinite",
        "horizontal-scroll": "horizontal-scroll 105s linear infinite",
      },
      fontFamily: {
        custom: ["Departure"],
      },
      gridTemplateColumns: {
        artifact: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
    colors: {
      // Theme 1 (cool theme) https://coolors.co/palette/0d1321-1d2d44-3e5c76-748cab-f0ebd8
      // A theme based on current website tones that are trending and easy on the eye.
      // top class colours for top class service.
       black: '#0D1321',
       darkBlue: '#1D2D44',
       midBlue: '#3E5C76',
       lightBlue: '#748CAB',
       offWhite: '#F0EBD8',

      //  Theme 2 (earthy greens) https://coolors.co/palette/dad7cd-a3b18a-588157-3a5a40-344e41
      // An earthy theme that offers greens as a sense of grounding and energy
       offgrey: '#DAD7CD',
       lightGreen: '#A3B18A',
       midGreen: '#588157',
       boldGreen: '#3A5A40',
       darkGreen: '#344E41',

       // Theme 3 (Vibrance) https://coolors.co/palette/8ecae6-219ebc-023047-ffb703-fb8500
       // This theme could be very good for buttons and guiding attention to action 
       lightBlue1: '#8ECAE6',
       midBlue1: '#219EBC',
       darkBlue1: '#023047',
       brightYellow: '#FFB703',
       brightOrange: '#FB8500'
       

      // All of the above could also be seperated into Primary, Secondary and accent colours
      // to be used throught the site.
      
    }
  },
  plugins: [],
};
