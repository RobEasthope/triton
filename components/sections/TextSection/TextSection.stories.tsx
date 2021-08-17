// eslint-disable-next-line no-use-before-define
import React from 'react';
import faker from 'faker';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';
import { TextSection as TextSectionProps } from 'types/sanity-schema';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

import { TextSection } from './TextSection';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Sections/Text',
  component: TextSection,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
  parameters: {
    badges: ['dev'],
  },
} as Meta;

const Template: Story<TextSectionProps> = (args) => <TextSection {...args} />;

// Primary
export const Primary = Template.bind({}) as Record<string, unknown>;

Primary.args = {
  heading: capitalizeFirstLetter(faker.lorem.words()),
  text: capitalizeFirstLetter(faker.lorem.words()),
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
