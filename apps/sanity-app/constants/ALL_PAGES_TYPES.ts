import Page from "ui-pkg/pages/Page/Page.schema";
import Course from "ui-pkg/pages/Course/Course.schema";
import Article from "ui-pkg/pages/Article/Article.schema";

export const ALL_PAGES_TYPES = [
  { type: Page.name },
  { type: Course.name },
  { type: Article.name },
];
