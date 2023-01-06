import Link from "next/link";
import { Course } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";
import { Box } from "ui-pkg/base/Box/Box";

// TYPES
export type FooterCourseListProps = {
  heading: string;
  courses: Course[] | null;
};

// MARKUP
export const FooterCourseList = ({ heading, courses }: FooterCourseListProps) => {
  if (!heading && !courses) {
    return null;
  }

  return (
    <section>
      {heading && <Text as="h2">{heading}</Text>}

      {courses && courses.length > 0 && (
        <Box as="ul">
          {courses.map((course, i) => (
            <li key={i}>
              <Link href={course?.slug?.current || ""}>{course?.name}</Link>
            </li>
          ))}
        </Box>
      )}
    </section>
  );
};
