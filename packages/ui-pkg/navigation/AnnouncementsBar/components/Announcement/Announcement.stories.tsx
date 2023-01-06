import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Announcement as AnnouncementProps } from "ui-pkg/types/sanity-schema";
import { Announcement } from "./Announcement";

export default {
  title: "Content/Announcement",
  component: Announcement,
};

export const Vanilla: StoryObj<AnnouncementProps> = {
  args: {
    text: faker.lorem.words(4),
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
