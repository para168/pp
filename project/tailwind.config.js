module.exports = {
  content: [
    './src/**/*.{html,ts,tsx}',  // Ensure Tailwind is aware of your TSX files
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
