import React from 'react';
import { Meta, Story as StoryProps } from '@storybook/react';

import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import { EXAMPLE_TEXT } from '@/STORYBOOK/mock-data/SANITY_TEXT';
import { StoryFauxProps } from '@/STORYBOOK/types/storybook';
import {
  ExampleFormattedText,
  ExampleFormattedTextProps,
} from './ExampleFormattedText';

export default {
  title: 'Utils/Formatted text/ExampleFormattedText',
  component: ExampleFormattedText,
  decorators: [
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: StoryProps<ExampleFormattedTextProps> = (args) => (
  <ExampleFormattedText {...args} />
);

// Vanilla
export const Vanilla = Template.bind({}) as StoryFauxProps;

Vanilla.args = {
  blocks: EXAMPLE_TEXT,
};

// No data
export const NoData = Template.bind({}) as StoryFauxProps;
NoData.args = {};
