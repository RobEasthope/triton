import { StoryObj } from "@storybook/react";
import { TripIndex, TripIndexProps } from "./TripIndex";

export default {
  title: "Content/Trip index",
  component: TripIndex,
};

export const Vanilla: StoryObj<TripIndexProps> = {
  args: {
    upcomingTrips: [],
    courseName: "Colombia",
    courseType: "XC",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
