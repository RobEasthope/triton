import { Hero as rawHeroProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Picture } from "ui-pkg/base/Picture/Picture";
import SanityMuxPlayer from "sanity-mux-player";
import { Text } from "ui-pkg/base/Text/Text";

// STYLES
// export const ForegroundContent = styled("div", {
//   position: "absolute",
//   zIndex: 1,
//   color: "white",
//   textAlign: "center",
// });

// export const ForegroundContentLayout = styled("div", {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });

// export const LogoWrapper = styled(Box, {
//   width: "400px",
// });

// export const Title = styled(Text, {});

// export const JumbotronBkgImage = styled(Picture, {
//   width: "100vw",
//   height: "100vh",
// });

// export const JumbotronBkgVideo = styled(SanityMuxPlayer, {
//   width: "100vw !important",
//   height: "100vh !important",

//   "& video": {
//     height: "100vh",
//     objectFit: "cover",
//     objectPosition: "center center",
//   },
// });

// TYPES
export interface HeroProps extends rawHeroProps {
  muxVideo: unknown;
}

// MARKUP
export const Hero = ({
  heading,
  logo,
  bkgMode,
  bkgImage,
  caption,
  muxVideo,
}: HeroProps) => {
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
                    alt={caption || ""}
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

export default Hero;
