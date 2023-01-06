import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Hero, HeroProps } from "./Hero";

export default {
  title: "Content/Landing hero",
  component: Hero,
};

// BackgroundImage
export const BackgroundImage: StoryObj<HeroProps> = {
  args: {},
};

// BackgroundVideo
export const BackgroundVideo: StoryObj<HeroProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
