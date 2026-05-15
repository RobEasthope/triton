import { StoryObj } from "@storybook/react";
import { YoutubeVideo as rawYoutubeVideoProps } from "ui-pkg/types/sanity-schema";
import { YoutubeVideo } from "./YoutubeVideo";

export default {
  title: "Content/Youtube video",
  component: YoutubeVideo,
};

export const Vanilla: StoryObj<rawYoutubeVideoProps> = {
  args: {
    url: "https://www.youtube.com/watch?v=XJATRUfyJ7Y",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
