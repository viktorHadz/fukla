/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        '4xl': '2000px',
      },
      colors: {
        pinkv: '#e95d7a',
      },
      backgroundImage: {
        'very-white-gradient':
          'radial-gradient(circle, #ffffff, #fefdff, #fefcfe, #fefafd, #fef8fb, #fef6f9, #fff4f7, #fff2f5, #ffeff3, #ffecf0, #ffe9ee, #ffe6ec)',
        'white-gradient':
          'linear-gradient(to bottom, #fff8f9, #fff5f6, #fff2f4, #ffeff1, #ffecef, #ffe8ec, #ffe3e8, #ffdfe5, #ffd8e0, #ffd1da, #ffcad5, #ffc3d0)',
        'pink-gradient':
          'linear-gradient(to bottom , #e95d7a, #ed89b3, #ebb4dc, #eddcf5, #ffffff)',
        'dark-pink-gradient':
          'linear-gradient(to bottom, #18181b, #392e44, #6d3f66, #ab4d78, #e95d7a)',
        'dark-gradient':
          'linear-gradient(to top, #18181b, #19191b, #19191c, #1a1a1c, #1b1b1c, #1d1d1e, #1e1e1f, #202021, #232325, #262628, #29292c, #2c2c30)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 0%', backgroundColor: '#ffc3d4' },
          '50%': { backgroundPosition: '50% 50%', backgroundColor: '#f06d92' },
          '100%': {
            backgroundPosition: '100% 100%',
            backgroundColor: '#e95d7a',
          },
        },
        glow: {
          '0%, 150%': { boxShadow: '0 0 10px rgba(233, 93, 122, 0.6)' },
          '50%': { boxShadow: '0 0 15px rgba(233, 93, 122, 0.9)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
        glow: 'glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
