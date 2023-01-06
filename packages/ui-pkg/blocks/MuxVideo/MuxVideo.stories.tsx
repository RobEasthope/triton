import { StoryObj } from "@storybook/react";
import { MuxVideo, MuxVideoProps } from "./MuxVideo";

export default {
  title: "Content/Mux video",
  component: MuxVideo,
};

export const Vanilla: StoryObj<MuxVideoProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
