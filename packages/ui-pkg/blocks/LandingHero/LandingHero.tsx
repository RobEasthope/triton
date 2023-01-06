import { LandingHero as rawLandingHeroProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { METADATA_FALLBACK } from "ui-pkg/constants/METADATA";
import SanityMuxPlayer from "sanity-mux-player";
import { Text } from "ui-pkg/base/Text/Text";

// TYPES
export interface LandingHeroProps extends rawLandingHeroProps {
  muxVideo: unknown;
}

// MARKUP
export const LandingHero = ({
  heading,
  logo,
  bkgMode,
  bkgImage,
  caption,
  muxVideo,
}: LandingHeroProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Box as="section">
      <>
        <Box as="div">
          <Box as="section">
            <Box as="div">
              <Box as="div">
                {logo && (
                  <Picture
                    asset={logo}
                    alt={METADATA_FALLBACK.TITLE}
                    mode="responsive"
                    maxWidth={400}
                  />
                )}

                {heading && <Text as="h1">{heading}</Text>}
              </Box>
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

export default LandingHero;
