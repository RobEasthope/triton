import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { CentredCTA, CentredCTAProps } from "./CentredCTA";

export default {
  title: "Content/Centred CTA",
  component: CentredCTA,
};

// BackgroundImage
export const BackgroundImage: StoryObj<CentredCTAProps> = {
  args: {},
};

// BackgroundVideo
export const BackgroundVideo: StoryObj<CentredCTAProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
