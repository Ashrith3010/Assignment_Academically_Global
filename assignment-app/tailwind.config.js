/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: "#2563eb",
        secondary: "#1e293b",
      },
      boxShadow: {
        soft: "0 8px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
