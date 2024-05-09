/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heading: '#ffa07a',
        secondary: '#e17449',
        fire: '#870000'
      }
    }
  },
  plugins: []
}
