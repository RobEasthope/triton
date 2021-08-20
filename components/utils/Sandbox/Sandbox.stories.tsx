import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Sandbox as SandboxComponent } from './Sandbox';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Utils/Sandbox',
  component: SandboxComponent,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story = () => <SandboxComponent />;

export const Sandbox = Template.bind({}) as Record<string, unknown>;
