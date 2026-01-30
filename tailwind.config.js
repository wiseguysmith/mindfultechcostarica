/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal luxury palette: black + warm cream + subtle gold
        cream: {
          50: '#FEFCF9',
          100: '#FDF9F3',
          200: '#FAF3E7',
          300: '#F4EDE2',
          400: '#E8DCC8',
          500: '#D4C4A8',
        },
        gold: {
          50: '#FFFEF7',
          100: '#FFFCE8',
          200: '#FFF8C4',
          300: '#FFE87C',
          400: '#F5D76E',
          500: '#D4AF37',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1A1A1A',
          700: '#0D0D0D',
          800: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

