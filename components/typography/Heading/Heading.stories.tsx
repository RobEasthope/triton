import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';

import { CenterTextComponent } from '.storybook/preview-ui/CenterTextComponent';
import { Heading } from './Heading';

export default {
  title: 'Typography/Headings',
  component: Heading,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterTextComponent>
        <Story />
      </CenterTextComponent>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <Heading as={undefined} min={undefined} max={undefined} {...args} />
);

// H1 (Bold)
export const Heading1 = Template.bind({}) as Record<string, unknown>;
Heading1.args = {
  as: 'h1',
  min: 32,
  max: 64,
  children: faker.lorem.words(),
};

// H2 (Bold)
export const Heading2 = Template.bind({}) as Record<string, unknown>;
Heading2.args = {
  as: 'h2',
  min: 18,
  max: 24,
  children: faker.lorem.words(),
};
