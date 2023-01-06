import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { AnnouncementsBar as AnnouncementsBarProps } from "ui-pkg/types/sanity-schema";
import { AnnouncementsBar } from "./AnnouncementsBar";

export default {
  title: "Content/Announcements bar",
  component: AnnouncementsBar,
};

export const Vanilla: StoryObj<AnnouncementsBarProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
