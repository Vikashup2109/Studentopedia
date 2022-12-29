/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    primary: '#373737',
                    opPrimary: '#3E3E3E'
               },
               screens: {
                    "xsm": '350px',
                    "sm": '640px',
                    "md": '768px',
                    "lg": '1024px',
                    "xl": '1280px',
                    "2xl": '1536px',
               },
          },
     },
     plugins: [
          // require('@tailwindcss/forms'),
     ],
}
