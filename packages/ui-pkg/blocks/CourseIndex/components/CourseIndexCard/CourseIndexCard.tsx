import Link from "next/link";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Text } from "ui-pkg/base/Text/Text";
import { CourseProps } from "ui-pkg/pages/Course/Course";
import { Box } from "ui-pkg/base/Box/Box";

// TYPES
export type CourseIndexCardProps = Pick<
  CourseProps["page"],
  "name" | "courseType" | "metadataDescription" | "metadataImage" | "slug"
>;

// MARKUP
export const CourseIndexCard = ({
  name,
  courseType,
  metadataImage,
  slug,
}: CourseIndexCardProps) => {
  if (!slug?.current) {
    return null;
  }

  return (
    <Box as="article">
      <Link href={slug?.current}>
        <Picture
          asset={metadataImage}
          alt={name || ""}
          mode="responsive"
          aspectRatio={3 / 4}
          maxWidth={400}
        />

        <Box as="div">
          {courseType && <Text as="p">{courseType}</Text>}
          {name && <Text as="p">{name}</Text>}
        </Box>
      </Link>
    </Box>
  );
};
