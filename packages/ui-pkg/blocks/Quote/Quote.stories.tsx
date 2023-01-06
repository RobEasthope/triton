import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Quote as QuoteMarkup, QuoteProps } from "./Quote";

export default {
  title: "Content/Quote",
  component: QuoteMarkup,
};

// Quote
export const Quote: StoryObj<QuoteProps> = {
  args: {
    quoteType: "quote",
    quotee: faker.name.findName(),
  },
};

// Testimonial
export const Testimonial: StoryObj<QuoteProps> = {
  args: {
    quoteType: "testimonial",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
