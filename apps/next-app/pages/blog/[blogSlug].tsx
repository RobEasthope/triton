// import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useRouter } from "next/router";
import { Loading } from "ui-pkg/base/Loading/Loading";
import { BLOG_POST_SLUG } from "ui-pkg/pages/BlogPost/constants/BLOG_POST_SLUG";
import { BlogPost, BlogPostProps } from "ui-pkg/pages/BlogPost/BlogPost";
import { sanityAPI } from "apis-pkg/sanity/sanityAPI";
import {
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POST_SLUGS_QUERY,
} from "ui-pkg/pages/BlogPost/BlogPost.queries";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";

// TYPES
type BlogPostBySlugProps = BlogPostProps & {
  fallbacks: MetadataSettings;
};

// MARKUP
export default function BlogPostRoute({
  page,
  header,
  footer,
  fallbacks,
}: BlogPostBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  return (
    <>
      <NextMetadata
        title={page?.title}
        description={page?.metadataDescription}
        thumbnail={page?.metadataImage}
        fallbacks={fallbacks}
      />
      {/* Loading spinner */}
      {isFallback && <Loading />}

      {/* Blog post layout */}
      {!isFallback && <BlogPost page={page} header={header} footer={footer} />}
    </>
  );
}

// SSG
export async function getStaticPaths() {
  const slugs: string[] = await sanityAPI.fetch(BLOG_POST_SLUGS_QUERY);

  const paths = slugs.map((slug) => {
    const blogSlugAsArray = slug?.split("/").filter((p) => p);

    return {
      params: { blogSlug: blogSlugAsArray.slice(-1).toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }: { params: { blogSlug: string } }) => {
  const payload: BlogPostBySlugProps = await sanityAPI.fetch(BLOG_POST_BY_SLUG_QUERY, {
    slug: `${BLOG_POST_SLUG}/${params?.blogSlug}`,
  });

  if (!payload?.page) {
    return { notFound: true };
  }

  return {
    // Payload
    props: {
      page: payload?.page || null,
      header: payload?.header || null,
      footer: payload?.footer || null,
      fallbacks: payload?.fallbacks || null,
    },
    // ISR cache time
    revalidate: 60,
  };
};
