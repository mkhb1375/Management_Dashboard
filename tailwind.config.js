/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#FAFAFB',
        primaryBlue: '#605BFF',

        


        
      },
            screens: {
        
        'sm': '640px',
        'md': '768px',
        'lg': '1100px',
        'xl': '1700px',
        '2xl': '2000px',
        
      },
    },
  },
  plugins: [],
}