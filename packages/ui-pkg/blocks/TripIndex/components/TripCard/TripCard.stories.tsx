import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { TripCard, TripCardProps } from "./TripCard";

export default {
  title: "Content/Trip card",
  component: TripCard,
};

export const Vanilla: StoryObj<TripCardProps> = {
  args: {
    courseName: faker.lorem.words(),
    courseType: faker.lorem.words(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
