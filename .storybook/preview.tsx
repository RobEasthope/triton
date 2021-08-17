import React from 'react';
import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { globalStorybookStyles } from './preview-ui/globalStorybookStyles';

addDecorator(withPerformance);

export const decorators = [
  (Story) => (
    <>
      {globalStorybookStyles}
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}