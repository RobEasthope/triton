import { EmphasisedText } from "ui-pkg/base/Prose/components/EmphasisedText/EmphasisedText";
import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Testimonial as rawTestimonialProps } from "ui-pkg/types/sanity-schema";

// TYPES
export type TestimonialProps = {
  testimonial: Pick<rawTestimonialProps, "quote" | "quotee" | "photo">;
};

// MARKUP
export const Testimonial = ({ testimonial }: TestimonialProps) => (
  <>
    <Prose as="div" content={testimonial?.quote} components={EmphasisedText} />

    {testimonial?.quotee && (
      <Box as="section">
        {testimonial?.photo && (
          <Box as="div">
            <Picture
              asset={testimonial?.photo}
              alt={testimonial?.quotee}
              mode="cover"
              maxWidth={44}
            />
          </Box>
        )}
        <Text as="p">{testimonial?.quotee}</Text>
      </Box>
    )}
  </>
);
