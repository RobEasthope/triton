import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';

import { CenterTextComponent } from '.storybook/preview-ui/CenterTextComponent';
import { RawHeading } from './RawHeading';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

export default {
  title: 'Utils/Text/RawHeading',
  component: RawHeading,
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
  <RawHeading as={undefined} min={undefined} max={undefined} {...args} />
);

export const Prototype = Template.bind({}) as Record<string, unknown>;
Prototype.args = {
  as: 'h1',
  min: 32,
  max: 64,
  mb: 64,
  children: capitalizeFirstLetter(faker.lorem.words()),
};
