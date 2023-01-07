import { RouterContext } from "next/dist/shared/lib/router-context";
import { addDecorator } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../styles/tailwind-globals.css";
import "../styles/tailwind.css";

// Integrate withPerformance into Storybook
addDecorator(withPerformance);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    highlighter: {
      showLineNumbers: true, // default: false
      wrapLines: false, // default: true
    },
    prettier: {
      tabWidth: 2,
      htmlWhitespaceSensitivity: "strict",
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  // SB Next router integrarion
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
