import { CentredCTA as rawCentredCTAProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";
import SanityMuxPlayer from "sanity-mux-player";
import { Picture } from "ui-pkg/base/Picture/Picture";

// TYPES
export interface CentredCTAProps extends rawCentredCTAProps {
  link: ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps;
  muxVideo: unknown;
}

// MARKUP
export const CentredCTA = ({
  heading,
  subHeading,
  link,
  bkgMode,
  bkgImage,
  caption,
  muxVideo,
}: CentredCTAProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Box as="section">
      <>
        <Box as="div">
          <Box as="section">
            <Box as="div">
              {heading && <Text as="span">{heading}</Text>}
              {subHeading && <Text as="h1">{subHeading}</Text>}
              {link && <SuperLink link={link}>{link.title}</SuperLink>}
            </Box>
          </Box>
        </Box>

        {bkgMode === "image" && (
          <Picture asset={bkgImage} alt={caption || ""} mode="cover" maxWidth={2560} />
        )}
        {bkgMode === "video" && (
          <SanityMuxPlayer
            assetDocument={muxVideo}
            autoload
            autoplay
            mute
            loop
            showControls={false}
          />
        )}
      </>
    </Box>
  );
};

export default CentredCTA;
