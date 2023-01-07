import { Error404, Error404Props } from "ui-pkg/pages/Error404/Error404";
import { Page, PageProps } from "ui-pkg/pages/Page/Page";
import { sanityPreviewAPI } from "apis-pkg/sanity/sanityPreviewAPI";
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_ID_QUERY,
} from "ui-pkg/pages/Page/Page.queries";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";
import { SanityPageByIdQueryProps } from "ui-pkg/types/SanityPageByIdQueryProps";

// TYPES
type PageByIdProps = PageProps & {
  error404: Error404Props["page"];
  fallbacks: MetadataSettings;
};

// MARKUP
export default function PageById({
  page,
  header,
  footer,
  fallbacks,
  error404,
}: PageByIdProps) {
  if (page === null) {
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

      <Page page={page} header={header} footer={footer} />
    </>
  );
}

// SSR CALL
export const getServerSideProps = async ({
  query,
}: {
  query: { id: string; key: string };
}) => {
  // If preview key is invalid return blank props.data.page object so 404 UI kicks in and ensures a form of security
  if (query?.key !== process.env.SANITY_STUDIO_PREVIEW_KEY) {
    return {
      props: {
        data: { page: null },
      },
    };
  }

  // Fetch page data
  const primer: SanityPageByIdQueryProps = await sanityPreviewAPI.fetch(
    PAGE_COMPONENT_TYPES_BY_ID_QUERY,
    {
      id: query?.id,
    }
  );

  // Fetch page data
  const payload: PageByIdProps = await sanityPreviewAPI.fetch(
    PAGE_BY_ID_QUERY({ id: query?.id, componentTypes: primer?.componentTypes })
  );

  // Prepare page props and caching settings
  return {
    props: {
      page: payload?.page || null,
      header: payload?.header || null,
      footer: payload?.footer || null,
      fallbacks: payload?.fallbacks || null,
      error404: payload?.error404 || null,
    },
  };
};
