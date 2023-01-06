import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { DetailCard, DetailCardProps } from "./DetailCard";

export default {
  title: "Content/Detail card",
  component: DetailCard,
};

export const Vanilla: StoryObj<DetailCardProps> = { args: {} };

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
