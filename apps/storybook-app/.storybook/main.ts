const path = require("path");

module.exports = {
  features: {
    previewCsfV3: true,
  },
  stories: [
    "../docs/Introduction.stories.mdx",
    "../../../packages/ui-pkg/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    // SCSS support
    "@storybook/preset-scss",

    // General addons
    "@storybook/addon-links",
    "storybook-addon-next-router",

    // The order of the following components determines their position in the SB addons bar
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    return config;
  },
};
