import { StoryObj } from "@storybook/react";
import { Footer, FooterProps } from "./Footer";

export default {
  title: "Navigation/Footer",
  component: Footer,
};

export const Vanilla: StoryObj<FooterProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
