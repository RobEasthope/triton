import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { BlogIndex, BlogIndexProps } from "./BlogIndex";

export default {
  title: "Content/Blog index",
  component: BlogIndex,
};

export const Vanilla: StoryObj<BlogIndexProps> = {
  args: {
    heading: faker.lorem.words(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
