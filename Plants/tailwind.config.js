/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      colors: {
        'primary': '#3238f2',
        'ritik': '#01ee91'
      },
      fontFamily: {
        'Jost': ["Jost", "sans-serif"],
        'Lobster': ["Lobster", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px"
        }
      },
      animation: {
        moving: 'moving 3s linear infinite',
      },
      keyframes: {
        moving: {
          '50%': { transform: 'translateY(-1rem)' },
        },
      },
    },
  },
  plugins: [],
}
