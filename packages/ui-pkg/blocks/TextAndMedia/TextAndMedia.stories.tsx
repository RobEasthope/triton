import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { TextAndMedia, TextAndMediaProps } from "./TextAndMedia";

export default {
  title: "Content/Text & Media",
  component: TextAndMedia,
};

export const Vanilla: StoryObj<TextAndMediaProps> = {
  args: {
    heading: faker.lorem.words(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
