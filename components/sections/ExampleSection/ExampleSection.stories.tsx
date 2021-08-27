import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';
import { ExampleSection as ExampleSectionProps } from 'settings/types/sanity-schema';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

import { ExampleSection } from './ExampleSection';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';

export default {
  title: 'Sections/ExampleSection',
  component: ExampleSection,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<ExampleSectionProps> = (args) => (
  <ExampleSection {...args} preview={false} />
);

// Vanilla
export const Vanilla = Template.bind({}) as Record<string, unknown>;

Vanilla.args = {
  heading: capitalizeFirstLetter(faker.lorem.words()),
  text: EXAMPLE_TEXT,
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
