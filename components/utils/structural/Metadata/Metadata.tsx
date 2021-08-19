import Head from 'next/head';

import { urlForImage } from 'utils/sanity/sanity-utils';
import { GlobalMetadata, HomePage, Page } from 'types/sanity-schema';

type MetadateType = {
  page: Page | HomePage;
  globalMetadata: GlobalMetadata;
};

export const Metadata = ({ page, globalMetadata }: MetadateType) => (
  <Head>
    {/* Standard HTML */}
    {page?.title && (
      <title>{`${page?.title} ${
        globalMetadata?.globalTitleTemplate || ''
      }`}</title>
    )}
    {page?.pageDescription && (
      <meta name="description" content={page?.pageDescription} />
    )}

    {/* Opengraph */}
    {page?.title && (
      <meta
        property="og:title"
        content={`${page?.title} ${globalMetadata?.globalTitleTemplate || ''}`}
      />
    )}
    {page?.pageDescription && (
      <meta property="og:description" content={page?.pageDescription} />
    )}
    {page?.pageThumbnail && (
      <meta
        property="og:image"
        content={urlForImage(page?.pageThumbnail).width(1200).height(630).url()}
      />
    )}

    {/* Twitter */}
    {page?.title && <meta name="twitter:title" content={page?.title} />}
    {page?.pageDescription && (
      <meta name="twitter:description" content={page?.pageDescription} />
    )}
    {page?.pageThumbnail && (
      <meta
        name="twitter:image"
        content={urlForImage(page?.pageThumbnail).width(1200).height(630).url()}
      />
    )}
  </Head>
);
