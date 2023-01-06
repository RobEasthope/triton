import { Gallery as rawGalleryProps } from "ui-pkg/types/sanity-schema";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Text } from "ui-pkg/base/Text/Text";
import { Box } from "ui-pkg/base/Box/Box";

// TYPES
export type GalleryProps = rawGalleryProps;

// MARKUP
export const Gallery = ({
  images,
  galleryCaption,
  columns,
  aspectRatio = 1 / 1,
  maxWidth = "medium",
}: GalleryProps) => {
  if (!images) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {images && (
          <Box as="div">
            {images &&
              images.map(
                (card) =>
                  card?.image && (
                    <figure key={card?._key}>
                      <Picture
                        asset={card?.image}
                        alt={card?.image?.caption || ""}
                        mode="responsive"
                        maxWidth={800}
                        aspectRatio={aspectRatio}
                      />

                      {card?.image?.caption && (
                        <figcaption>{card?.image?.caption}</figcaption>
                      )}
                    </figure>
                  )
              )}
          </Box>
        )}
        <Text as="p">{galleryCaption}</Text>
      </Box>
    </Box>
  );
};

export default Gallery;
