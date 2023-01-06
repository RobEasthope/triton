import { Quotes as rawQuotesProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Quote, QuoteProps } from "ui-pkg/blocks/Quote/Quote";

// TYPES
export interface QuotesProps extends rawQuotesProps {
  quotes: QuoteProps[];
}

// MARKUP
export const Quotes = ({ quotes }: QuotesProps) => {
  if (!quotes) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {quotes.length > 0 && (
          <div>
            {quotes.map((quote) => (
              <Quote
                _type={quote?._type}
                quoteType={quote?.quoteType}
                quote={quote?.quote}
                quotee={quote?.quotee}
                photo={quote?.photo}
                testimonial={quote?.testimonial}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Quotes;
