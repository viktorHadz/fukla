/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        '4xl': '2000px',
      },
      backgroundImage: {
        'white-gradient':
          'linear-gradient(to bottom, #fff8f9, #fff5f6, #fff2f4, #ffeff1, #ffecef, #ffe8ec, #ffe3e8, #ffdfe5, #ffd8e0, #ffd1da, #ffcad5, #ffc3d0)',
        'pink-gradient':
          'linear-gradient(to bottom , #e95d7a, #ed89b3, #ebb4dc, #eddcf5, #ffffff)',
        'dark-pink-gradient':
          'linear-gradient(to bottom, #18181b, #392e44, #6d3f66, #ab4d78, #e95d7a)',
        'dark-gradient':
          'linear-gradient(to bottom, #18181b, #241e2a, #372234, #4d2437, #622733);',
      },
    },
  },
  plugins: [],
};
