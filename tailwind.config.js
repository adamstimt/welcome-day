/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
 theme: {
  extend: {
    keyframes: {
      'fade-down': {
        '0%': { opacity: '0', transform: 'translateY(-40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-up': {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'pop': {
        '0%': { opacity: '0', transform: 'scale(0.8)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      'zoom-slow': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.1)' },
      },
    },
    animation: {
      'fade-down': 'fade-down 1s ease-out forwards',
      'fade-up': 'fade-up 1s ease-out forwards',
      'pop': 'pop 0.8s ease-out forwards',
      'zoom-slow': 'zoom-slow 20s ease-in-out infinite alternate',
    },
  },
},

  plugins: [],
};
