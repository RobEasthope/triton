import React from 'react';
import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { globalStorybookStyles } from './preview-ui/globalStorybookStyles';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../settings/theme/theme';

addDecorator(withPerformance);

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      {/* {globalStorybookStyles} */}
      <Story />
    </ChakraProvider>
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