import { Box } from "ui-pkg/base/Box/Box";
import { Text } from "ui-pkg/base/Text/Text";
import { BlogPostProps } from "ui-pkg/pages/BlogPost/BlogPost";

// TYPES
export type BlogTitleProps = Pick<
  BlogPostProps["page"],
  "title" | "author" | "blogCategories" | "metadataDescription" | "estimatedReadingTime"
>;

// MARKUP
export const BlogTitle = ({
  title,
  author,
  blogCategories,
  estimatedReadingTime,
  metadataDescription,
}: BlogTitleProps) => {
  if (!title) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        <Box as="div">
          {title && <Text as="h1">{title}</Text>}
          <Box as="section">
            {author && <Text as="p">{author}</Text>}
            {estimatedReadingTime && <Text as="p">{estimatedReadingTime} minutes</Text>}
            {blogCategories?.map((category) => (
              <Text as="p">{category?.current}</Text>
            ))}
          </Box>
          {metadataDescription && (
            <Box as="div">
              <Text as="p">{metadataDescription}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogTitle;
