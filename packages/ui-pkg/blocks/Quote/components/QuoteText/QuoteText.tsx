import { EmphasisedText } from "ui-pkg/base/Prose/components/EmphasisedText/EmphasisedText";
import { Box } from "ui-pkg/base/Box/Box";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { Text } from "ui-pkg/base/Text/Text";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Quote as rawQuoteProps } from "ui-pkg/types/sanity-schema";

// TYPES
export type QuoteTextProps = Pick<rawQuoteProps, "quote" | "quotee" | "photo">;

// MARKUP
export const QuoteText = ({ quote, quotee, photo }: QuoteTextProps) => (
  <>
    <Prose as="div" content={quote} components={EmphasisedText} />

    {quotee && (
      <Box as="section">
        {photo && (
          <Picture
            asset={photo}
            alt={quotee}
            mode="responsive"
            aspectRatio={1 / 1}
            maxWidth={44}
          />
        )}
        <Text as="p">{quotee}</Text>
      </Box>
    )}
  </>
);
