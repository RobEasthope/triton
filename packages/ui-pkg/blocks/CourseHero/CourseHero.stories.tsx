import { StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { CourseHero, CourseHeroProps } from "./CourseHero";

export default {
  title: "Content/Course hero",
  component: CourseHero,
};

export const BackgroundImage: StoryObj<CourseHeroProps> = {
  args: {
    courseType: faker.lorem.words(),
    courseName: faker.address.country(),
    metadataDescription: faker.lorem.words(12),
    bkgMode: "image",
  },
};

// BackgroundVideo
export const BackgroundVideo = {
  args: {
    courseType: faker.lorem.words(),
    courseName: faker.address.country(),
    metadataDescription: faker.lorem.words(12),
    bkgMode: "video",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
