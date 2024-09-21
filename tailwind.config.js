/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: '#00FFBF',
        mag: '#D046D6',
        pink: '#FF4186',
        blue: '#5BE2FA',
        lightpurp: '#6370F5',
        darkpurp: '#443D87',
        dark: '#0A081E'
      },
      screens: {
        'xs': '480px',
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}

