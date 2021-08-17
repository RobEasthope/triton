const path = require('path');

function getPackageDir(package) {
  return path.dirname(require.resolve(path.join(package, 'package.json')))
}

module.exports = {
  "stories": [
    "./Introduction.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",

    // Order of the following components determines their position in the addons bar
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@whitespace/storybook-addon-html",
    "storybook-addon-code-preview"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
      "@emotion/core": getPackageDir("@emotion/react"),
      "@emotion/styled": getPackageDir("@emotion/styled"),
      "emotion-theming": getPackageDir("@emotion/react"),
    };
    return config;
  },
}