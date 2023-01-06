import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Questions, QuestionsProps } from "./Questions";

export default {
  title: "Content/Questions",
  component: Questions,
};

export const Vanilla: StoryObj<QuestionsProps> = {
  args: {
    heading: faker.lorem.words(),
    questions: [],
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
