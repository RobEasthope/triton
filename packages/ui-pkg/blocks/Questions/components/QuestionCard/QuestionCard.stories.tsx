import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { QuestionCard, QuestionCardProps } from "./QuestionCard";

export default {
  title: "Content/Question card",
  component: QuestionCard,
};

export const Vanilla: StoryObj<QuestionCardProps> = {
  args: {
    question: faker.lorem.words(),
  },
};

// LongerQuestion
export const LongerQuestion: StoryObj<QuestionCardProps> = {
  args: {
    question: faker.lorem.sentence(12),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
