/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        '4xl': '2000px',
      },
    },
  },
  plugins: [],
};
