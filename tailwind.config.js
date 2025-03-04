/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(10%)' },
          '70%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(70%)' },
          '70%': { transform: 'translateX(0)' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideLeft: 'slideLeft 2s ease-in-out',
        slideUp:'slideUp 2s ease-in-out'
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    
    },
   
  
    },
    
  
  plugins: [
    flowbite.plugin(),
  ],
}

