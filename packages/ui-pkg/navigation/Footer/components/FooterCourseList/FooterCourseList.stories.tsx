import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { FooterCourseList, FooterCourseListProps } from "./FooterCourseList";

export default {
  title: "Navigation/Footer course list",
  component: FooterCourseList,
};

export const Vanilla: StoryObj<FooterCourseListProps> = {
  args: {
    heading: faker.lorem.words(),
    courses: [],
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
