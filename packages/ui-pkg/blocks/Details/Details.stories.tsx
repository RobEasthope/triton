import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Details, DetailsProps } from "./Details";

export default {
  title: "Content/Details",
  component: Details,
};

// OneColumn
export const OneColumn: StoryObj<DetailsProps> = {
  args: {
    heading: faker.lorem.words(),
    details: [],
    columns: "1",
  },
};

// TwoColumns
export const TwoColumns: StoryObj<DetailsProps> = {
  args: {
    heading: faker.lorem.words(),
    details: [],
  },
};

// ThreeColumns
export const ThreeColumns: StoryObj<DetailsProps> = {
  args: {
    heading: faker.lorem.words(),
    details: [],
  },
};

// FourColumns
export const FourColumns: StoryObj<DetailsProps> = {
  args: {
    heading: faker.lorem.words(),
    details: [],
  },
};

// FiveColumns
export const FiveColumns: StoryObj<DetailsProps> = {
  args: {
    heading: faker.lorem.words(),
    details: [],
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
