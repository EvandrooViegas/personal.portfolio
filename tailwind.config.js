/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#328ba8",
        "gray-1": "#B1B1B1"
      }
    },
  },
  plugins: [],
}