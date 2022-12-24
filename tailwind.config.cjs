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
               }
          },
     },
     plugins: [
          // require('@tailwindcss/forms'),
     ],
}
