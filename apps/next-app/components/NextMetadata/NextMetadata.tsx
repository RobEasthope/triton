import Head from "next/head";
import {
  MetadataSettings,
  SanityImageAsset,
  SanityReference,
  SanityImageCrop,
  SanityImageHotspot,
} from "ui-pkg/types/sanity-schema";
import { METADATA_FALLBACK } from "ui-pkg/constants/METADATA";
import { urlFor } from "apis-pkg/sanity/urlFor";

// TYPES
type NextMetadataType = {
  title?: string;
  description?: string;
  thumbnail?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  fallbacks: MetadataSettings;
};

// MARKUP
export const NextMetadata = ({
  title,
  description,
  thumbnail,
  fallbacks,
}: NextMetadataType) => (
  <Head>
    {/* Standard HTML */}
    <title>{title || fallbacks?.titleFallback || METADATA_FALLBACK.TITLE}</title>
    <meta name="description" content={description || fallbacks?.descriptionFallback} />

    {/* Opengraph */}
    <meta property="og:title" content={title || METADATA_FALLBACK.TITLE} />
    <meta
      property="og:description"
      content={description || fallbacks?.descriptionFallback}
    />
    <meta
      property="og:image"
      content={
        thumbnail || fallbacks?.thumbnailFallback
          ? urlFor(thumbnail || fallbacks?.thumbnailFallback || "")
              .width(1200)
              .height(630)
              .url()
          : ""
      }
    />

    {/* Twitter */}
    <meta
      name="twitter:title"
      content={title || fallbacks?.titleFallback || METADATA_FALLBACK.TITLE}
    />
    <meta
      name="twitter:description"
      content={description || fallbacks?.descriptionFallback}
    />
    <meta
      name="twitter:image"
      content={
        thumbnail || fallbacks?.thumbnailFallback
          ? urlFor(thumbnail || fallbacks?.thumbnailFallback || "")
              .width(1200)
              .height(630)
              .url()
          : ""
      }
    />
  </Head>
);
