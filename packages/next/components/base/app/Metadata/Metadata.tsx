import Head from 'next/head';

import { urlForImage } from 'utils/sanity/sanity-utils';
import { GlobalMetadata, Home, Page } from 'types/sanity-schema';

type MetadateType = {
  page: Page | Home;
  globalMetadata: GlobalMetadata;
};

export const Metadata = ({ page, globalMetadata }: MetadateType) => (
  <Head>
    {/* Standard HTML */}
    {page?.metadataTitle && (
      <title>{`${page?.metadataTitle} ${
        globalMetadata?.globalTitleTemplate || ''
      }`}</title>
    )}
    {page?.metadataDescription && (
      <meta name="description" content={page?.metadataDescription} />
    )}

    {/* Opengraph */}
    {page?.metadataTitle && (
      <meta
        property="og:title"
        content={`${page?.metadataTitle} ${
          globalMetadata?.globalTitleTemplate || ''
        }`}
      />
    )}
    {page?.metadataDescription && (
      <meta property="og:description" content={page?.metadataDescription} />
    )}
    {page?.metadataImage && (
      <meta
        property="og:image"
        content={urlForImage(page?.metadataImage).width(1200).height(630).url()}
      />
    )}

    {/* Twitter */}
    {page?.metadataTitle && (
      <meta name="twitter:title" content={page?.metadataTitle} />
    )}
    {page?.metadataDescription && (
      <meta name="twitter:description" content={page?.metadataDescription} />
    )}
    {page?.metadataImage && (
      <meta
        name="twitter:image"
        content={urlForImage(page?.metadataImage).width(1200).height(630).url()}
      />
    )}
  </Head>
);
