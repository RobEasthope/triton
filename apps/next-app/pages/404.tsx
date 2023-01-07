import { sanityAPI } from "apis-pkg/sanity/sanityAPI";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { Error404, Error404Props } from "ui-pkg/pages/Error404/Error404";
import { ERROR_404_QUERY } from "ui-pkg/pages/Error404/Error404.queries";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";

// TYPES
type Custom404Props = Error404Props & {
  fallbacks: MetadataSettings;
};

// MARKUP
export default function Custom404({ page, header, footer, fallbacks }: Custom404Props) {
  return (
    <>
      <NextMetadata title="404" description="404" fallbacks={fallbacks} />

      <Error404 page={page} header={header} footer={footer} />
    </>
  );
}

// SSG CALL
export const getStaticProps = async () => {
  const payload: Custom404Props = await sanityAPI.fetch(ERROR_404_QUERY);

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
