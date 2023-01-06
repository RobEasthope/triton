import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { ProfileCard, ProfileCardProps } from "./ProfileCard";

export default {
  title: "Content/Profile card",
  component: ProfileCard,
};

export const Vanilla: StoryObj<ProfileCardProps> = {
  args: {
    name: faker.name.findName(),
  },
};

// LongerDescription
export const LongerDescription: StoryObj<ProfileCardProps> = {
  args: {
    name: faker.name.findName(),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
