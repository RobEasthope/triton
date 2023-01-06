import { StoryObj } from "@storybook/react";
import { Image, ImageProps } from "./Image";

export default {
  title: "Content/Image",
  component: Image,
};

// WithCaption
export const WithCaption: StoryObj<ImageProps> = {
  args: {},
};

// WithoutCaption
export const WithoutCaption: StoryObj<ImageProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
