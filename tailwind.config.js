/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "dark-red": "#b22222",
      red: "#f08080",
      "light-red": "#fff0f5",
      orange: "#fbceb1",
      yellow: "#ffefd5",
      pink: "#ff00ff",
    },
  },
  plugins: [],
}
