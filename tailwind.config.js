/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens: { sm: '480px' },
      spacing: {
        big: '48rem',
      },
    },
  },
  plugins: [],
}
