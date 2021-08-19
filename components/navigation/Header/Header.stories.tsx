import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';
import { Header as HeaderProps } from 'types/sanity-schema';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

import { Header } from './Header';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Navigation/Header',
  component: Header,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

// Primary
export const Primary = Template.bind({}) as Record<string, unknown>;

Primary.args = {
  navigation: capitalizeFirstLetter(faker.lorem.words()),
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
