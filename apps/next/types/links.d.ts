import { SanityReference, Page, Home } from 'types/sanity-schema';

export type ExternalLinkWithTitleProp = {
  _type: 'externalLinkWithTitle';
  _key: string;
  title: string;
  to?: Page | Home;
  url: string;
};

export type ExternalLinkProp = {
  _type: 'externalLinkSansTitle';
  _key: string;
  newTab: boolean;
  to?: Page | Home;
  url: string;
};

export type InternalLinkWithTitleProp = {
  _type: 'internalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  title: string;
  to: Page | Home;
};

export type InternalLinkProp = {
  _type: 'internalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  to: Page | Home;
};
