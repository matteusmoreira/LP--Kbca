/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2563EB',   // Primary Brand Blue (Royal Blue)
          cyan: '#06B6D4',   // Secondary Cyan
          orange: '#F97316', // Accent Orange (from logo dots)
          dark: '#0F172A',   // Slate-900
          darker: '#020617', // Slate-950
          light: '#F8FAFC',  // Slate-50
        }
      }
    },
  },
  plugins: [],
}