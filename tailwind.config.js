const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
    plugin(function ({ matchUtilities, theme }) {
      const shadowSizes = {
        xs: "2",
        sm: "4",
        base: "6",
        md: "8",
        lg: "10",
        xl: "12",
      };

      matchUtilities(
        Object.fromEntries(
          Object.entries(shadowSizes).map(([key, value]) => [
            `shadow-box-${key}`,
            (colorValue) => ({
              boxShadow: `${value}px ${value}px 0px 0px ${colorValue}`,
            }),
          ])
        ),
        { values: flattenColorPalette(theme("boxShadowColor")), type: "color" }
      );
    }),
  ],
};
