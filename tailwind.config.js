module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleDown: {
          "0%": {
            opacity: 0,
            transform: "scaleY(0)",
          },
          "50%": {
            opacity: 0.5,
            transform: "scaleY(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        dropdown: "scaleDown 0.2s ease-out forwards",
      },
    },
  },
  colors: {},
  fontFamily: {},
  plugins: [],
};
