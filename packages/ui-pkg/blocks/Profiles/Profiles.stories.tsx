import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Profiles, ProfilesProps } from "./Profiles";

export default {
  title: "Content/Profiles",
  component: Profiles,
};

// TwoColumns
export const TwoColumns: StoryObj<ProfilesProps> = {
  args: {
    heading: faker.lorem.paragraph(),
    columns: 2,
  },
};

// ThreeColumns
export const ThreeColumns: StoryObj<ProfilesProps> = {
  args: {
    heading: faker.lorem.paragraph(),
    columns: 3,
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
