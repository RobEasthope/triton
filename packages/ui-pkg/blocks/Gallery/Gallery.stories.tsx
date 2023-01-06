import { StoryObj } from "@storybook/react";
import { Gallery as GalleryProps } from "ui-pkg/types/sanity-schema";

import { Gallery } from "./Gallery";

export default {
  title: "Content/Gallery",
  component: Gallery,
};

// OneColumn
export const OneColumn: StoryObj<GalleryProps> = {
  args: {},
};

// TwoColumns
export const TwoColumns: StoryObj<GalleryProps> = {
  args: {},
};

// ThreeColumns
export const ThreeColumns: StoryObj<GalleryProps> = {
  args: {},
};

// FourColumns
export const FourColumns: StoryObj<GalleryProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
