/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        siteBg: {
          'light': 'rgb(245,245,245)',
          'dark':'rgb(31,31,31)'
        },
        siteBgAlt: {
          'light': 'rgb(255,255,255)',
          'dark': 'rgb(26,26,26)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
