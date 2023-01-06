import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { BlogIndexCard, BlogIndexCardProps } from "./BlogIndexCard";

export default {
  title: "Content/Blog card",
  component: BlogIndexCard,
};

export const Vanilla: StoryObj<BlogIndexCardProps> = {
  args: {
    title: faker.lorem.words(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
