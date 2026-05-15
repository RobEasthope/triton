import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import { Box } from "ui-pkg/base/Box/Box";
import { Page as rawPageProps } from "ui-pkg/types/sanity-schema";
import { renderBlocks } from "ui-pkg/utils/renderBlocks";

// TYPES
export type PageProps = {
  page: rawPageProps;
  header: HeaderProps["header"];
  footer: FooterProps["footer"];
};

// MARKUP
export const Page = ({ page, header, footer }: PageProps) => (
  <Box as="div">
    <Header header={header} />

    <Box as="main">
      {renderBlocks({
        blocks: page?.sections,
      })}
    </Box>

    <Footer footer={footer} />
  </Box>
);
