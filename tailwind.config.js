/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6D28D9', // Deep Purple
          secondary: '#8B5CF6', // Lighter Purple
          text: '#1F2937', // Dark Gray
        },
        silver: {
          300: '#C0C0C0',
          500: '#A9A9A9',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #000000, #4A0E4E, #000000)',
        'gradient-light': 'linear-gradient(to bottom right, #FFFFFF, #E6E6FA, #FFFFFF)',
      },
      boxShadow: {
        'dark-mode': '0 10px 15px -3px rgba(128, 0, 128, 0.3), 0 4px 6px -2px rgba(128, 0, 128, 0.1)',
      },
      transitionProperty: {
        'theme': 'background, color, box-shadow',
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}
