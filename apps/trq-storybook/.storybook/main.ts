const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "./Introduction.stories.mdx",
    "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)",
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
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    };
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
}