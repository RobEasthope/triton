import React from 'react';
import { Meta, Story } from '@storybook/react';

import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import {
  BASSENTHWAITE_IMAGE,
  RED_ARROWS,
} from '@/STORYBOOK/mock-data/SANITY_IMAGES';
import { SanityImage, SanityImageProps } from './SanityImage';

export default {
  title: 'Utils/Media/SanityImage',
  component: SanityImage,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<SanityImageProps> = (args) => <SanityImage {...args} />;

// Responsive
export const Responsive = Template.bind({}) as Record<string, unknown>;

Responsive.args = {
  asset: RED_ARROWS,
  mode: 'responsive',
  maxWidth: 400,
};

// Cover - full size
export const CoverFullSize = Template.bind({}) as Record<string, unknown>;
CoverFullSize.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Square
export const CoverSquare = Template.bind({}) as Record<string, unknown>;
CoverSquare.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <AspectRatio.Root ratio={1 / 1}>
        <Story />
      </AspectRatio.Root>
    </div>
  ),
];
CoverSquare.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Landscape
export const CoverLandscape = Template.bind({}) as Record<string, unknown>;
CoverLandscape.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <AspectRatio.Root ratio={16 / 9}>
        <Story />
      </AspectRatio.Root>
    </div>
  ),
];
CoverLandscape.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Portrait
export const CoverPortrait = Template.bind({}) as Record<string, unknown>;
CoverPortrait.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <div style={{ width: '100%', maxWidth: '200px' }}>
      <AspectRatio.Root ratio={9 / 16}>
        <Story />
      </AspectRatio.Root>
    </div>
  ),
];
CoverPortrait.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Contain - Full screen
export const ContainFullScreen = Template.bind({}) as Record<string, unknown>;
ContainFullScreen.args = {
  asset: BASSENTHWAITE_IMAGE,
  mode: 'contain',
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
