import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { CourseIndexCard, CourseIndexCardProps } from "./CourseIndexCard";

export default {
  title: "Content/Blog card",
  component: CourseIndexCard,
};

export const Vanilla: StoryObj<CourseIndexCardProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
