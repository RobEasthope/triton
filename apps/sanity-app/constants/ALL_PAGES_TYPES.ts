import Page from "ui-pkg/pages/Page/Page.schema";
import Course from "ui-pkg/pages/Course/Course.schema";
import Blog from "ui-pkg/pages/BlogPost/BlogPost.schema";

export const ALL_PAGES_TYPES = [
  { type: Page.name },
  { type: Course.name },
  { type: Blog.name },
];
