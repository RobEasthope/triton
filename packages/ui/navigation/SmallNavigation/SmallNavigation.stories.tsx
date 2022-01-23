import React from 'react';
import { Meta, Story as StoryProps } from '@storybook/react';
import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import { SmallNavigation, SmallNavigationProps } from './SmallNavigation';

export default {
  title: 'Navigation/SmallNavigation',
  component: SmallNavigation,
  decorators: [
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: StoryProps<SmallNavigationProps> = (args) => (
  <SmallNavigation {...args} />
);

// Vanilla
export const Vanilla = Template.bind({}) as Record<string, unknown>;

Vanilla.args = {
  navigation: [
    {
      _key: '7c4bc9de2735',
      _type: 'internalLinkWithTitle',
      title: 'Home',
      to: {
        slug: {
          _type: 'slug',
          current: 'root',
        },
      },
    },
    {
      _key: '10514eca5a00',
      _type: 'internalLinkWithTitle',
      title: 'About',
      to: {
        slug: {
          _type: 'slug',
          current: 'about',
        },
      },
    },
    {
      _key: 'a263b6d3ac5c',
      _type: 'externalLinkWithTitle',
      title: 'External',
      url: 'https://placeholder.com',
    },
  ],
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
