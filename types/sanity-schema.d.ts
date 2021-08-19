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

export type Documents = HomePage | Page;
