import YouTube from "react-youtube";
import { Box } from "ui-pkg/base/Box/Box";
import { TextAndMedia as rawTextAndMediaProps } from "ui-pkg/types/sanity-schema";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { getYoutubeIdfromUrl } from "ui-pkg/utils/getYoutubeIdfromUrl";
import { Text } from "ui-pkg/base/Text/Text";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";

// TYPES
export type TextAndMediaProps = rawTextAndMediaProps;

// MARKUP
export const TextAndMedia = ({
  heading,
  text,
  mediaType,
  image,
  youtubeUrl,
  // alignment,
  mediaCaption,
}: TextAndMediaProps) => {
  if (!text && !mediaType) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <Text as="h2">{heading}</Text>}

        <Prose as="div" content={text} components={BasicTextComponents} />

        {mediaType === "image" && image && (
          <>
            <Picture
              asset={image}
              alt={mediaCaption || ""}
              mode="responsive"
              maxWidth={1200}
            />
            {mediaCaption && <div>{mediaCaption}</div>}
          </>
        )}

        {mediaType === "youtube" && youtubeUrl && (
          <>
            <Box as="div">
              <YouTube videoId={getYoutubeIdfromUrl(youtubeUrl)} className="video" />
            </Box>
            {mediaCaption && <div>{mediaCaption}</div>}
          </>
        )}
      </Box>
    </Box>
  );
};

export default TextAndMedia;
