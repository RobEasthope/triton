import { StoryObj } from "@storybook/react";
import { VimeoVideo as rawVimeoVideoProps } from "ui-pkg/types/sanity-schema";
import { VimeoVideo } from "./VimeoVideo";

export default {
  title: "Content/Vimeo video",
  component: VimeoVideo,
};

export const Vanilla: StoryObj<rawVimeoVideoProps> = {
  args: {
    url: "https://vimeo.com/122375452",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
