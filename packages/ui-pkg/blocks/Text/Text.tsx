import { Box } from "ui-pkg/base/Box/Box";
import { Text as rawTextProps } from "ui-pkg/types/sanity-schema";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { ArticleTextComponents } from "ui-pkg/base/Prose/components/ArticleText/ArticleText";

// TYPES
export type TextProps = rawTextProps;

export const Text = ({ text }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        <Prose as="div" content={text} components={ArticleTextComponents} />
      </Box>
    </Box>
  );
};

export default Text;
