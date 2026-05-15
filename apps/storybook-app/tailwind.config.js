/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const TAILWIND_THEME = require("ui-pkg/styles/tailwind-theme");
const TAILWIND_PLUGINS = require("ui-pkg/styles/tailwind-plugins");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../apps/next-app/pages/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-pkg/**/*.{js,ts,jsx,tsx}",
    "../../apps/next-app/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: TAILWIND_THEME,
  plugins: TAILWIND_PLUGINS,
};
