import YouTube from "react-youtube";
import { YoutubeVideo as rawYoutubeVideoProps } from "ui-pkg/types/sanity-schema";
import { getYoutubeIdfromUrl } from "ui-pkg/utils/getYoutubeIdfromUrl";
import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";

// TYPES
export type YoutubeVideoProps = rawYoutubeVideoProps;

// MARKUP
export const YoutubeVideo = ({
  url,
  caption,
  maxWidth = "medium",
}: YoutubeVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="width">
        <Box as="div">
          <YouTube videoId={getYoutubeIdfromUrl(url)} className="video" />
        </Box>
        {caption && <Text as="figcaption">{caption}</Text>}
      </Box>
    </Box>
  );
};

export default YoutubeVideo;
