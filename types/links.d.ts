import { SanityReference, Page, HomePage } from 'types/sanity-schema';

export type ExternalLinkWithTitleProp = {
  _type: 'externalLinkWithTitle';
  _key: string;
  newTab: boolean;
  title: string;
  to?: Page | HomePage;
  url: string;
};

export type InternalLinkWithTitleProp = {
  _type: 'internalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<Page | HomePage>;
  title: string;
  to: Page | HomePage;
};

export type InternalLinkSansTitleProp = {
  _type: 'internalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<Page | HomePage>;
  to: Page | HomePage;
};

export type ExternalLinkSansTitleProp = {
  _type: 'externalLinkSansTitle';
  _key: string;
  newTab: boolean;
  to?: Page | HomePage;
  url: string;
};

export type LinkWithTitleProp =
  | ExternalLinkWithTitleProp
  | InternalLinkWithTitleProp;

export type LinkSansTitleProp =
  | ExternalLinkSansTitleProp
  | InternalLinkSansTitleProp;
