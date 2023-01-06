import Vimeo from "@u-wave/react-vimeo";
import { VimeoVideo as rawVimeoVideoProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";

// TYPES
export type VimeoVideoProps = rawVimeoVideoProps;

// MARKUP
export const VimeoVideo = ({ url, caption, maxWidth = "medium" }: VimeoVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        <Vimeo video={url} responsive />
        {caption && <Text as="figcaption">{caption}</Text>}
      </Box>
    </Box>
  );
};

export default VimeoVideo;
