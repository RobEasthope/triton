import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { BlogTitle, BlogTitleProps } from "./BlogTitle";

export default {
  title: "Content/BlogTitle",
  component: BlogTitle,
};

export const Vanilla: StoryObj<BlogTitleProps> = {
  args: {
    title: faker.lorem.words(),
    author: "",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
