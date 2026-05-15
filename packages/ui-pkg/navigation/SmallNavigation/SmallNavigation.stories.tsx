import { StoryObj } from "@storybook/react";

import { SmallNavigation, SmallNavigationProps } from "./SmallNavigation";

export default {
  title: "Navigation/SmallNavigation",
  component: SmallNavigation,
};

export const Vanilla: StoryObj<SmallNavigationProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
