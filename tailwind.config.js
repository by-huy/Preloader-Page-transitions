/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi-Variable', 'sans-serif']
      },
      fontSize: {
        'display': ['clamp(3rem, 12.4em - 0.5rem, 15em)'],
        'body': ['clamp(1rem, 2.75vw - 1rem, 2rem)'],
        'subheading': ['clamp(1.25rem, 4vw - 1rem, 2rem)'],
        'heading-1': ['clamp(1.75rem, 8vw - 1rem, 4rem)']
      }
    
    },
  },
  plugins: [],
}