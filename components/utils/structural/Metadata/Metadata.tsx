import Head from 'next/head';

import { urlForImage } from 'utils/sanity/sanity-utils';
import { HomePage, Page } from 'types/sanity-schema';

type MetadateType = {
  page: Page | HomePage;
  globalMetadata: GlobalMetadata;
};

export const Metadata = ({ page, globalMetadata }: MetadateType) => (
  <Head>
    {/* Standard HTML */}
    {page?.pageTitle && (
      <title>{`${page?.pageTitle} ${
        globalMetadata?.globalTitleTemplate || ''
      }`}</title>
    )}
    {page?.pageDescription && (
      <meta name="description" content={page?.pageDescription} />
    )}

    {/* Opengraph */}
    {page?.pageTitle && (
      <meta
        property="og:title"
        content={`${page?.pageTitle} ${
          globalMetadata?.globalTitleTemplate || ''
        }`}
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
    {page?.pageTitle && <meta name="twitter:title" content={page?.pageTitle} />}
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
