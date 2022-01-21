import React from 'react';
import { Meta, Story } from '@storybook/react';

import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import { EXAMPLE_TEXT } from '@/STORYBOOK/mock-data/SANITY_TEXT';
import {
  ExampleFormattedText,
  ExampleFormattedTextProps,
} from './ExampleFormattedText';

export default {
  title: 'Utils/Formatted text/ExampleFormattedText',
  component: ExampleFormattedText,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<ExampleFormattedTextProps> = (args) => (
  <ExampleFormattedText {...args} preview={false} />
);

// Vanilla
export const Vanilla = Template.bind({}) as Record<string, unknown>;

Vanilla.args = {
  blocks: EXAMPLE_TEXT,
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
