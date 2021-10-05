const path = require('path');

module.exports = {
  "stories": [
    "./Introduction.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",

    // The order of the following components determines their position in the SB addons bar
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@whitespace/storybook-addon-html",
    "storybook-addon-code-preview"
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    return config;
  },
}