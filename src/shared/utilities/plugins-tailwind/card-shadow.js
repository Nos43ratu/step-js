const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = plugin(function ({ matchUtilities, theme }) {
  const shadowSizes = {
    xs: "2",
    sm: "4",
    base: "6",
    md: "8",
    lg: "10",
    xl: "12",
  };

  matchUtilities(
    {
      "card-shadow": (sizeValue) => ({
        boxShadow: `${sizeValue}px ${sizeValue}px 0px 0px var(--card-shadow-color)`,
      }),
    },
    { values: shadowSizes, type: "relative-size" }
  );

  matchUtilities(
    {
      "card-shadow": (colorValue) => ({
        "--card-shadow-color": `${colorValue}`,
      }),
    },
    { values: flattenColorPalette(theme("boxShadowColor")), type: "color" }
  );
});
