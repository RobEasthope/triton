import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { LandingHero, LandingHeroProps } from "./LandingHero";

export default {
  title: "Content/Landing hero",
  component: LandingHero,
};

// BackgroundImage
export const BackgroundImage: StoryObj<LandingHeroProps> = {
  args: {
    heading: faker.lorem.words(),
    bkgMode: "image",
  },
};

// BackgroundVideo
export const BackgroundVideo: StoryObj<LandingHeroProps> = {
  args: {
    heading: faker.lorem.words(),
    bkgMode: "video",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
