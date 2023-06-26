const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        grid: `linear-gradient(${colors.sky["100"]} 1px, transparent 1px), linear-gradient(to right, ${colors.sky["100"]} 1px, ${colors.sky["50"]} 1px)`,
      },
      backgroundSize: {
        lg: "20px 20px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("./src/shared/utilities/plugins-tailwind/shadow_box.js"),
  ],
};
