import React from 'react';
import { Meta, Story as StoryProps } from '@storybook/react';
import { Header as HeaderProps } from 'types/sanity-schema';

import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import { TRIQUETRA_LOGO } from '@/STORYBOOK/mock-data/SANITY_IMAGES';
import { StoryFauxProps } from '@/STORYBOOK/types/storybook';
import { Header } from './Header';

export default {
  title: 'Navigation/Header',
  component: Header,
  decorators: [
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: StoryProps<HeaderProps> = (args) => <Header {...args} />;

// Vanilla
export const Vanilla = Template.bind({}) as StoryFauxProps;

Vanilla.args = {
  logo: TRIQUETRA_LOGO,
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
export const NoData = Template.bind({}) as StoryFauxProps;
NoData.args = {};
