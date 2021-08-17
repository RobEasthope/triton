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

export type ExampleSection = {
  _type: "exampleSection";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Text — `string`
   *
   *
   */
  text?: string;
};

export type Documents = HomePage | Page;
