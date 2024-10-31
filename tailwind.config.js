/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md}",
    "./src/**/*.svg",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Nunito', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
    },
  },

  plugins: [],
}

