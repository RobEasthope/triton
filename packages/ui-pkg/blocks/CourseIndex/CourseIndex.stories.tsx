import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { CourseIndex, CourseIndexProps } from "./CourseIndex";

export default {
  title: "Content/Blog index",
  component: CourseIndex,
};

export const Vanilla: StoryObj<CourseIndexProps> = { args: {} };

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
