/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#337AB7',
      },
      boxShadow: {
        spec: '0px 0px 5px 0px rgba(51, 122, 183, 0.25)',
        arrows: '0px 0px 5px 0px #337AB7',
      },
    },
  },
  plugins: [],
};
