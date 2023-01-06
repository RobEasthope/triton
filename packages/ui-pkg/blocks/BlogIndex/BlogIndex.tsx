import { BlogIndex as rawBlogIndexProps, BlogPost } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { BlogIndexCard } from "ui-pkg/blocks/BlogIndex/components/BlogIndexCard/BlogIndexCard";

// TYPES
export interface BlogIndexProps extends rawBlogIndexProps {
  blogPosts: BlogPost[];
}

// MARKUP
export const BlogIndex = ({ heading, blogPosts }: BlogIndexProps) => {
  if (!heading && !blogPosts) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <h2>{heading}</h2>}
        {blogPosts?.length > 0 && (
          <div>
            {blogPosts.map((blog) => (
              <BlogIndexCard
                key={blog?._id}
                title={blog?.title}
                metadataDescription={blog?.metadataDescription}
                metadataImage={blog?.metadataImage}
                slug={blog?.slug}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default BlogIndex;
