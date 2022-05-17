module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: { slideup: "slideup 1s ease-in-out" },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: "translateY(100%)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
