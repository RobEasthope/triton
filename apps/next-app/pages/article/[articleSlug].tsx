// import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useRouter } from "next/router";
import { Loading } from "ui-pkg/base/Loading/Loading";
import { ARTICLE_SLUG } from "ui-pkg/pages/Article/constants/ARTICLE_SLUG";
import { Article, ArticleProps } from "ui-pkg/pages/Article/Article";
import { sanityAPI } from "apis-pkg/sanity/sanityAPI";
import {
  BLOG_POST_BY_SLUG_QUERY,
  ARTICLE_SLUGS_QUERY,
} from "ui-pkg/pages/Article/Article.queries";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";

// TYPES
type ArticleBySlugProps = ArticleProps & {
  fallbacks: MetadataSettings;
};

// MARKUP
export default function ArticleRoute({
  page,
  header,
  footer,
  fallbacks,
}: ArticleBySlugProps) {
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
      {!isFallback && <Article page={page} header={header} footer={footer} />}
    </>
  );
}

// SSG
export async function getStaticPaths() {
  const slugs: string[] = await sanityAPI.fetch(ARTICLE_SLUGS_QUERY);

  const paths = slugs.map((slug) => {
    const articleSlugAsArray = slug?.split("/").filter((p) => p);

    return {
      params: { articleSlug: articleSlugAsArray.slice(-1).toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }: { params: { articleSlug: string } }) => {
  const payload: ArticleBySlugProps = await sanityAPI.fetch(BLOG_POST_BY_SLUG_QUERY, {
    slug: `${ARTICLE_SLUG}/${params?.articleSlug}`,
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
