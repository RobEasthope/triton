import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Text as TextProps } from "ui-pkg/types/sanity-schema";
import { Text } from "./Text";

export default {
  title: "Content/Text",
  component: Text,
};

export const Vanilla: StoryObj<TextProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
