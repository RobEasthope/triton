import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Sandbox as SandboxComponent } from './Sandbox';
import { CenterTextComponent } from '.storybook/preview-ui/CenterTextComponent';

export default {
  title: 'Utils/Sandbox',
  component: SandboxComponent,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterTextComponent>
        <Story />
      </CenterTextComponent>
    ),
  ],
} as Meta;

const Template: Story = () => <SandboxComponent />;

export const Sandbox = Template.bind({}) as Record<string, unknown>;
