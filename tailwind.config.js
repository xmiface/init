/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./**/**/*.{ts,tsx, css, js, jsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        customgray1: "#323d70",
        customgray2: "#394063",
      },
    },
  },
};
