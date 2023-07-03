/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/*.liquid',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        'compacta': ['Compacta', 'Assistant', 'sans-serif'],
        'kepler': ['Kepler'],
        'tungsten': ['Tungsten', 'sans-serif']
      }
    },
  },
  plugins: [],
}

