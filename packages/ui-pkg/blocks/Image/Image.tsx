import { Image as rawImageProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Text } from "ui-pkg/base/Text/Text";

// TYPES
export type ImageProps = rawImageProps;

// MARKUP
export const Image = ({ image, maxWidth, aspectRatio }: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="figure">
        <Picture
          asset={image}
          alt={image?.caption || ""}
          aspectRatio={aspectRatio}
          mode="responsive"
          maxWidth={4000}
        />
        {image?.caption && <Text as="figcaption">{image?.caption}</Text>}
      </Box>
    </Box>
  );
};

export default Image;
