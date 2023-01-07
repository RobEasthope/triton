/* eslint-disable global-require */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "../../apps/next-app/tailwind.config.js",
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 90,
  tabWidth: 2,
};
