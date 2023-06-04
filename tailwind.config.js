/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        fugaz: ['var(--font-fugaz)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        'primary': '#FF5C02',
        'secondary': '#0F1819'
      },
      },
    },
  plugins: [],
}
