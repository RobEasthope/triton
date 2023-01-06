import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Quotes, QuotesProps } from "./Quotes";

export default {
  title: "Content/Quotes",
  component: Quotes,
};

export const Vanilla: StoryObj<QuotesProps> = {
  args: {
    heading: faker.lorem.words(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
