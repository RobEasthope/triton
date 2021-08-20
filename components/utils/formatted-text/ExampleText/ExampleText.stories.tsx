import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ExampleText, ExampleTextProps } from './ExampleText';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';

export default {
  title: 'Utils/Formatted text/Example text',
  component: ExampleText,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<ExampleTextProps> = (args) => (
  <ExampleText {...args} preview={false} />
);

// Vanilla
export const Vanilla = Template.bind({}) as Record<string, unknown>;

Vanilla.args = {
  blocks: EXAMPLE_TEXT,
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
