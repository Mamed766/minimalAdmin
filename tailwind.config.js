/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-custom": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
