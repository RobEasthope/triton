import React from 'react';
import { Meta, Story } from '@storybook/react';

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

const Template: Story<PictureProps> = (args) => (
  <Picture preview={false} {...args} />
);

// Responsive
export const Responsive = Template.bind({}) as Record<string, unknown>;

Responsive.args = {
  asset: {
    _type: 'image',
    asset: {
      _ref: 'image-9e3248f2b358adf609c136e4054e91ba132447e5-4032x3024-jpg',
      _type: 'reference',
    },
    caption: 'Bassenthwaite Lake, Cumbria',
  },
  mode: 'responsive',
  maxWidth: 400,
};

// Cover
export const Cover = Template.bind({}) as Record<string, unknown>;

Cover.args = {
  asset: {
    _type: 'image',
    asset: {
      _ref: 'image-9e3248f2b358adf609c136e4054e91ba132447e5-4032x3024-jpg',
      _type: 'reference',
    },
    caption: 'Bassenthwaite Lake, Cumbria',
  },
  mode: 'cover',
  maxWidth: 400,
};

// Contain
export const Contain = Template.bind({}) as Record<string, unknown>;

Contain.args = {
  asset: {
    _type: 'image',
    asset: {
      _ref: 'image-9e3248f2b358adf609c136e4054e91ba132447e5-4032x3024-jpg',
      _type: 'reference',
    },
    caption: 'Bassenthwaite Lake, Cumbria',
  },
  mode: 'contain',
  maxWidth: 400,
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
