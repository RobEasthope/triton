import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { ArticleCategory, Article as rawArticleProps } from "ui-pkg/types/sanity-schema";
import { ArticleTextComponents } from "ui-pkg/base/Prose/components/ArticleText/ArticleText";
import { Box } from "ui-pkg/base/Box/Box";
import { ArticleTitle } from "./components/ArticleTitle/ArticleTitle";

// TYPES
export type ArticleProps = {
  page: rawArticleProps & {
    author: string;
    articleCategories: ArticleCategory["name"][];
    estimatedReadingTime: number;
  };
  header: HeaderProps["header"];
  footer: FooterProps["footer"];
};

// MARKUP
export const Article = ({ page, header, footer }: ArticleProps) => (
  <Box as="div">
    <Header header={header} />

    <Box as="main">
      <ArticleTitle
        title={page?.title}
        author={page.author}
        articleCategories={page?.articleCategories}
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
