/** One-off build config for static preview — run: npx tailwindcss@3.4.17 -i tw-input.css -o styles.css --minify */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0055FF",
        secondary: "#111827",
        accent: "#2A7FFF",
        cream: "#F9F7F2",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
