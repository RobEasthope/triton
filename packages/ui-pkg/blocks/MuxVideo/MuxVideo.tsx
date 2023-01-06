import SanityMuxPlayer from "sanity-mux-player";
import { Box } from "ui-pkg/base/Box/Box";
import { MuxVideo as rawMuxVideoProps } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";

// TYPES
export interface MuxVideoProps extends rawMuxVideoProps {
  muxVideo: Record<string, unknown>;
}

// MARKUP
export const MuxVideo = ({ muxVideo, caption, maxWidth = "medium" }: MuxVideoProps) => {
  if (!muxVideo) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {muxVideo && (
          <SanityMuxPlayer
            assetDocument={muxVideo}
            autoload={false}
            autoplay={false}
            loop={false}
            showControls
          />
        )}
        {caption && <Text as="figcaption">{caption}</Text>}
      </Box>
    </Box>
  );
};

export default MuxVideo;
