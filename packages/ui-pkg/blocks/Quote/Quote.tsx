import { Box } from "ui-pkg/base/Box/Box";
import {
  Testimonial as rawTestimonialProps,
  Quote as rawQuoteProps,
} from "ui-pkg/types/sanity-schema";
import { QuoteText } from "./components/QuoteText/QuoteText";
import { Testimonial } from "./components/Testimonial/Testimonial";

// TYPES
export interface QuoteProps extends rawQuoteProps {
  testimonial: Pick<rawTestimonialProps, "quote" | "quotee" | "photo">;
}

// MARKUP
export const Quote = ({ quoteType, quote, quotee, photo, testimonial }: QuoteProps) => {
  if (!quoteType) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {quoteType === "quote" && (
          <QuoteText quote={quote} quotee={quotee} photo={photo} />
        )}

        {quoteType === "testimonial" && <Testimonial testimonial={testimonial} />}
      </Box>
    </Box>
  );
};

export default Quote;
