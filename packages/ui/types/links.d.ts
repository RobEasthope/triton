import { SanityReference, Page, Home } from 'types/sanity-schema';

export type ExternalLinkWithTitleProp = {
  _type: 'ExternalLinkWithTitle';
  _key: string;
  title: string;
  to?: Page | Home;
  url: string;
};

export type ExternalLinkProp = {
  _type: 'ExternalLinkSansTitle';
  _key: string;
  newTab: boolean;
  to?: Page | Home;
  url: string;
};

export type InternalLinkWithTitleProp = {
  _type: 'InternalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  title: string;
  to: Page | Home;
};

export type InternalLinkProp = {
  _type: 'InternalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  to: Page | Home;
};
