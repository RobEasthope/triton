import { useRouter } from "next/router";
import { Error404, Error404Props } from "ui-pkg/pages/Error404/Error404";
import { Page, PageProps } from "ui-pkg/pages/Page/Page";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { Loading } from "ui-pkg/base/Loading/Loading";
import { createSlugFromQuery } from "utils/createSlugFromQuery";
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
  PAGE_SLUGS_QUERY,
} from "ui-pkg/pages/Page/Page.queries";
import { pageRenderChecks } from "utils/pageRenderChecks";
import { sanityAPI } from "apis-pkg/sanity/sanityAPI";
import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";
import { SanityPageByIdQueryProps } from "ui-pkg/types/SanityPageByIdQueryProps";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";

type PageBySlugProps = PageProps & {
  error404: Error404Props["page"];
  fallbacks: MetadataSettings;
};

// MARKUP
export default function PageBySlug({
  page,
  header,
  footer,
  fallbacks,
  error404,
}: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  // Only use pageRenderChecks function with Page doc types. It's designed to check for the home page and render the correct page based on the url slug
  if (!pageRenderChecks({ page, currentRoute: router.asPath })) {
    return <Error404 page={error404} header={header} footer={footer} />;
  }

  return (
    <>
      <NextMetadata
        title={page?.title}
        description={page?.metadataDescription}
        thumbnail={page?.metadataImage}
        fallbacks={fallbacks}
      />

      {isFallback && <Loading />}

      {!isFallback && <Page page={page} header={header} footer={footer} />}
    </>
  );
}

// SSG
export const getStaticPaths = async () => {
  const slugs: string[] = await sanityAPI.fetch(PAGE_SLUGS_QUERY);

  const paths = slugs.map((slug) => ({
    params: { slug: slug?.split("/").filter((p) => p) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: { params: { slug: string[] } }) => {
  // Fetch page id and component types
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug:
        // If the router returns the app root pass in the home page slug. Other wise just pass in the page slug
        params?.slug?.length > 0 ? createSlugFromQuery(params?.slug) : HOME_PAGE_SLUG,
    }
  );

  if (!primer?.id) {
    return { notFound: true };
  }

  // Fetch page data
  const payload: PageBySlugProps = await sanityAPI.fetch(
    PAGE_BY_ID_QUERY({ id: primer?.id, componentTypes: primer?.componentTypes })
  );

  // Page payload
  return {
    props: {
      page: payload?.page || null,
      header: payload?.header || null,
      footer: payload?.footer || null,
      fallbacks: payload?.fallbacks || null,
      error404: payload?.error404 || null,
    },
    // ISR cache time
    revalidate: 60,
  };
};
