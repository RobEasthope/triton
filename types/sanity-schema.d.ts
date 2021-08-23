import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Header
 *
 *
 */
export interface Header extends SanityDocument {
  _type: "header";

  /**
   * Header navigation — `array`
   *
   *
   */
  rawNavigation?: Array<
    SanityKeyed<InternalLinkWithTitle> | SanityKeyed<ExternalLinkWithTitle>
  >;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Global SEO metadata
 *
 *
 */
export interface GlobalMetadata extends SanityDocument {
  _type: "globalMetadata";

  /**
   * Sitename — `string`
   *
   * Used for SEO & descriptive purposes
   */
  globalSitename: string;

  /**
   * Page title — `string`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalTitle: string;

  /**
   * Page title template — `string`
   *
   * Displayed after the page title e.g. PAGE TITLE | Ida
   */
  globalTitleTemplate: string;

  /**
   * Page description — `text`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalDescription: string;

  /**
   * Page thumbnail — `image`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalThumbnail: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Canonical URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  canonicalUrl?: string;

  /**
   * Twitter site username — `string`
   *
   * https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#attribution
   */
  globalTwitterSiteHandle?: string;
}

/**
 * Home page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * Page details — `string`
   *
   *
   */
  headingpagedetails?: string;

  /**
   * Page title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * Set the page URL
   */
  slug: { _type: "slug"; current: string };

  /**
   * Page content — `string`
   *
   *
   */
  headingpagecontent?: string;

  /**
   * Page sections — `array`
   *
   *
   */
  sections?: Array<SanityKeyed<ExampleSection>>;

  /**
   * Page metadata — `string`
   *
   *
   */
  headingpagemetadata?: string;

  /**
   * Metadata title — `string`
   *
   * Used in browser tab titles and social media. Custom title highlt recommeneded
   */
  metadataTitle: string;

  /**
   * Metadata description — `text`
   *
   * Used in social media and search engine listings
   */
  metadataDescription: string;

  /**
   * Metadata image — `text`
   *
   * Used in social media and search engine listings
   */
  metadataImage: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Page details — `string`
   *
   *
   */
  headingpagedetails?: string;

  /**
   * Page title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * Set the page URL
   */
  slug: { _type: "slug"; current: string };

  /**
   * Page content — `string`
   *
   *
   */
  headingpagecontent?: string;

  /**
   * Page sections — `array`
   *
   *
   */
  sections?: Array<SanityKeyed<ExampleSection>>;

  /**
   * Page metadata — `string`
   *
   *
   */
  headingpagemetadata?: string;

  /**
   * Metadata title — `string`
   *
   * Used in browser tab titles and social media
   */
  metadataTitle: string;

  /**
   * Metadata description — `text`
   *
   * Used in social media and search engine listings
   */
  metadataDescription: string;

  /**
   * Metadata image — `text`
   *
   * Used in social media and search engine listings.
   */
  metadataImage: string;
}

export type InternalLink = {
  _type: "internalLink";
  /**
   * Page — `reference`
   *
   *
   */
  internalUID: SanityReference<Page | HomePage>;
};

export type InternalLinkWithTitle = {
  _type: "internalLinkWithTitle";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Page — `reference`
   *
   *
   */
  internalUID: SanityReference<Page | HomePage>;
};

export type ExternalLink = {
  _type: "externalLink";
  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type ExternalLinkWithTitle = {
  _type: "externalLinkWithTitle";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type ExampleText = Array<SanityKeyed<SanityBlock>>;

export type ExampleSection = {
  _type: "exampleSection";
  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Text — `exampleText`
   *
   *
   */
  text?: ExampleText;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Attribution — `string`
     *
     *
     */
    attribution?: string;
  };
};

export type Documents = Header | GlobalMetadata | HomePage | Page;
