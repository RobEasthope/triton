import { CourseHero as rawCourseHeroProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";
import SanityMuxPlayer from "sanity-mux-player";
import { Picture } from "ui-pkg/base/Picture/Picture";

// TYPES
export interface CourseHeroProps extends rawCourseHeroProps {
  courseType: string | null;
  courseName: string | null;
  metadataDescription: string | null;
  muxVideo: unknown;
}

// MARKUP
export const CourseHero = ({
  courseType,
  courseName,
  metadataDescription,
  bkgMode,
  bkgImage,
  caption,
  muxVideo,
}: CourseHeroProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Box as="section">
      <>
        <Box as="div">
          <Box as="section">
            <Box as="div">
              {courseType && <Text as="span">{courseType}</Text>}
              {courseName && <Text as="h1">{courseName}</Text>}
              {metadataDescription && <Text as="p">{metadataDescription}</Text>}
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

export default CourseHero;
