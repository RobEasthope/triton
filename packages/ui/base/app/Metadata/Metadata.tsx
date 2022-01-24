import Head from 'next/head';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createImageUrlBuilder } from 'next-sanity';
import { GlobalMetadata, Home, Page } from '@/UI/types/sanity-schema';
import { METADATA } from '@/UI/constants/METADATA';
import { sanityConfig } from '@/UTILS/sanity-api/sanity-config';

type MetadateType = {
  page: Page | Home;
  globalMetadata: GlobalMetadata;
};

export const Metadata = ({ page, globalMetadata }: MetadateType) => {
  const imageBuilder = createImageUrlBuilder(sanityConfig);
  const urlForImage = (source: SanityImageSource) =>
    imageBuilder.image(source).auto('format').fit('max');

  return (
    <Head>
      {/* Standard HTML */}
      {page?.metadataTitle && (
        <title>
          {`${page?.metadataTitle} ${
            globalMetadata?.globalTitleTemplate || ''
          }` || METADATA.TITLE}
        </title>
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
          content={
            urlForImage(page?.metadataImage).width(1200).height(630).url() || ''
          }
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
          content={
            urlForImage(page?.metadataImage).width(1200).height(630).url() || ''
          }
        />
      )}
    </Head>
  );
};
