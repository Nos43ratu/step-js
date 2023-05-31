/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: "var(16px 16px 0px 0px, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);",
      },
      backgroundImage: {
        grid: "linear-gradient(#727272 1.1px,transparent 1.1px),linear-gradient(to right,#444444 1.1px,#f7fee7 1.1px)",
      },
      backgroundSize: {
        lg: "48px 48px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
