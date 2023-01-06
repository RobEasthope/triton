import { CourseIndex as rawCourseIndexProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { CourseIndexCard } from "ui-pkg/blocks/CourseIndex/components/CourseIndexCard/CourseIndexCard";
import { CourseProps } from "ui-pkg/pages/Course/Course";
import { Text } from "ui-pkg/base/Text/Text";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";

// TYPES
export interface CourseIndexProps extends rawCourseIndexProps {
  // courseType: string;
  upcomingCourses: CourseProps["page"][] | null;
}

// MARKUP
export const CourseIndex = ({
  heading,
  description,
  upcomingCourses,
}: CourseIndexProps) => {
  if (!heading && !upcomingCourses) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <Text as="h2">{heading}</Text>}

        <Prose as="div" content={description} components={BasicTextComponents} />

        {upcomingCourses && upcomingCourses?.length > 0 && (
          <Box as="div">
            {upcomingCourses?.map((course) => (
              <CourseIndexCard
                key={course?._id}
                name={course?.name}
                slug={course?.slug}
                courseType={course?.courseType}
                metadataDescription={course?.metadataDescription}
                metadataImage={course?.metadataImage}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CourseIndex;
