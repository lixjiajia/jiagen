/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
      },
      screens: {
        '2xl': '1600px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: theme => ({
        'screen-2xl': theme('screens.2xl'),
      }),
      backgroundImage: {
          'blue-teal-gradient': 'linear-gradient(90deg, rgba(49,130,206,1) 0%, rgba(56,178,172,1) 100%)'
        },
      colors: {
        productblue: '#4D89BE', 
        brandblue: '#145aac',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
