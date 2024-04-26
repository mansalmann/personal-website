/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container:{
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        warnaUtama: "#14b8a6",
        warnaSekunder: "#64748b",
        warnaGelap: "#0f172a"
      },
      screens:{
        "2xl": "1320px",
      }
    },
  },
  plugins: [],
}

