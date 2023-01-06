import { StoryObj } from "@storybook/react";

import { Header, HeaderProps } from "./Header";

export default {
  title: "Navigation/Header",
  component: Header,
};

export const Vanilla: StoryObj<HeaderProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
