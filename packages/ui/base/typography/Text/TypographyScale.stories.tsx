import React from 'react';
import { Meta, Story as StoryProps } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Typography/Typography scales',
  component: Text,
} as Meta;

const Template: StoryProps = (args) => (
  <>
    <Text as="h1" typeSize="jumbotron" {...args}>
      Jumbotron
    </Text>
    <Text as="h2" typeSize="xxLarge" {...args}>
      XX Large
    </Text>
    <Text as="h2" typeSize="xLarge" {...args}>
      X Large
    </Text>
    <Text as="h3" typeSize="large" {...args}>
      Large
    </Text>
    <Text as="h4" typeSize="medium" {...args}>
      Medium
    </Text>
    <Text as="h5" typeSize="standard" {...args}>
      Standard
    </Text>
    <Text as="h6" typeSize="small" {...args}>
      Small
    </Text>
    <Text as="h6" typeSize="tiny" {...args}>
      Tiny
    </Text>
  </>
);

// SerifTypographyScale
export const SerifTypographyScale = Template.bind({}) as Record<
  string,
  unknown
>;

SerifTypographyScale.args = {
  fontFamily: 'serif',
};

// SansSerifTypographyScale
export const SansSerifTypographyScale = Template.bind({}) as Record<
  string,
  unknown
>;

SansSerifTypographyScale.args = {
  fontFamily: 'sansSerif',
};
