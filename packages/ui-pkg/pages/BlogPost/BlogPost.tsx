import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BlogCategory, BlogPost as rawBlogPostProps } from "ui-pkg/types/sanity-schema";
import { ArticleTextComponents } from "ui-pkg/base/Prose/components/ArticleText/ArticleText";
import { Box } from "ui-pkg/base/Box/Box";
import { BlogTitle } from "./components/BlogTitle/BlogTitle";

// TYPES
export type BlogPostProps = {
  page: rawBlogPostProps & {
    author: string;
    blogCategories: BlogCategory["name"][];
    estimatedReadingTime: number;
  };
  header: HeaderProps["header"];
  footer: FooterProps["footer"];
};

// MARKUP
export const BlogPost = ({ page, header, footer }: BlogPostProps) => (
  <Box as="div">
    <Header header={header} />

    <Box as="main">
      <BlogTitle
        title={page?.title}
        author={page.author}
        blogCategories={page?.blogCategories}
        estimatedReadingTime={page?.estimatedReadingTime}
        metadataDescription={page?.metadataDescription}
      />
      <Box as="section">
        <Prose as="div" content={page?.text} components={ArticleTextComponents} />
      </Box>
    </Box>

    <Footer footer={footer} />
  </Box>
);
