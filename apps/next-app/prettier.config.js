/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 90,
  tabWidth: 2,
};
