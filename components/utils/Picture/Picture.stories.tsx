import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

import { Picture, PictureProps } from './Picture';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Utils/Picture',
  component: Picture,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<PictureProps> = (args) => <Picture {...args} />;

// Primary
export const Primary = Template.bind({}) as Record<string, unknown>;

Primary.args = {
  heading: capitalizeFirstLetter(faker.lorem.words()),
  text: capitalizeFirstLetter(faker.lorem.words()),
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
