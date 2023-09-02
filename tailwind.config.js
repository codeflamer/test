/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#161616",
        yellowish: "#FBE54D",
        error: "E76143",
        inputBackground: "#2A2B31",
        inputBorder: "#333535",
        tipBg: "#242529",
        seperator: "#333535",
        footer: "#242529",
      },
    },
  },
  plugins: [],
};
