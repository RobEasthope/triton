import { Box } from "ui-pkg/base/Box/Box";
import Link from "next/link";
import { Text } from "ui-pkg/base/Text/Text";
import { BlogPost } from "ui-pkg/types/sanity-schema";

// TYPES
export type BlogIndexCardProps = Pick<
  BlogPost,
  "title" | "metadataDescription" | "metadataImage" | "slug"
>;

// MARKUP
export const BlogIndexCard = ({ title, slug }: BlogIndexCardProps) => {
  if (!slug?.current) {
    return null;
  }

  return (
    <Box as="article">
      <Link href={slug?.current}>
        <Text as="span">{title}</Text>
      </Link>
    </Box>
  );
};
