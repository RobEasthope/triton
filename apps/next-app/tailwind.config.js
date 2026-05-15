/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const TAILWIND_THEME = require("ui-pkg/styles/tailwind-theme");
const TAILWIND_PLUGINS = require("ui-pkg/styles/tailwind-plugins");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-pkg/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: TAILWIND_THEME,
  plugins: TAILWIND_PLUGINS,
};
