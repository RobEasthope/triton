import { StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { BlogCTA, BlogCTAProps } from "./BlogCTA";

// STORY CONFIG
export default {
  title: "Page blocks/BlogCTA",
  component: BlogCTA,
};

// COMPONENT STORIES
export const BackgroundImage: StoryObj<BlogCTAProps> = {
  args: {},
};

// BackgroundVideo
export const BackgroundVideo: StoryObj<BlogCTAProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
