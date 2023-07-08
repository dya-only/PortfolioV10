/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'prompt': ['Prompt', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'onest': ['Onest', 'sans-serif'],
      'noto': ['Noto Sans KR', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}