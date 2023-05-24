const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.p-30': {
          padding: '120px',
        },
        '.px-30': {
          padding: '0 120px',
        },
        '.pr-30': {
          paddingRight: '120px',
        },
        '.pl-30': {
          paddingLeft: '120px',
        },
        '.pt-25': {
          paddingTop: '100px',
        },
        '.bg-lsand': {
          backgroundColor: '#FCF7E6',
        },
        '.bg-orange': {
          backgroundColor: '#ED5E21',
        },
        '.text-lsand': {
          color: '#FCF7E6',
        },
        '.w-318': {
          width: '1272px',
        },
        '.w-129': {
          width: '518px',
        },
        '.w-75': {
          width: '300px',
        },
        '.h-75': {
          height: '300px',
        },
      });
    }),
  ],
};
