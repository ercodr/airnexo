module.exports = {
  content: ["*.{html,js}", "./src/*.js"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
