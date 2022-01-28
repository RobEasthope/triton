import { headingUI } from '../../utils/sanity/headingUI';

export default {
  name: 'Settings',
  type: 'document',
  title: 'Site settings',
  fields: [
    headingUI('SEO & metadata'),
    {
      name: 'globalSitename',
      title: 'Sitename',
      type: 'string',
      description: 'Used for SEO & descriptive purposes',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'globalTitle',
      title: 'Page title',
      type: 'string',
      description:
        'Can be overridden on a page by page basis in the pages "Metadata" tab.',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'globalTitleTemplate',
      title: 'Page title template',
      type: 'string',
      description: 'Displayed after the page title e.g. PAGE TITLE | Ida',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'globalDescription',
      title: 'Page description',
      type: 'text',
      description:
        'Can be overridden on a page by page basis in the pages "Metadata" tab.',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'globalThumbnail',
      title: 'Page thumbnail',
      type: 'image',
      description:
        'Can be overridden on a page by page basis in the pages "Metadata" tab.',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      name: 'globalTwitterSiteHandle',
      title: 'Twitter site username',
      type: 'string',
      description:
        'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#attribution',
      validation: (Rule) => Rule.required().warning(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      };
    },
  },
};
