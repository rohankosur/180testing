/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0B33',
        'midnight-card': '#101144',
        gold: '#E5BE85',
        'gold-light': '#F5DFC0',
        silver: '#E2E8F0',
      },
    },
  },
  plugins: [],
};
