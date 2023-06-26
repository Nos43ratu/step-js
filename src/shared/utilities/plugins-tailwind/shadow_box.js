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
});
