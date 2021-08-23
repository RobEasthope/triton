import { sectionsIndex } from '../../../.sanity-studio/schemas/sections-index';
import { headingUI } from '../../../.sanity-studio/ui/headingUI';

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    headingUI('Page details'),
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 30,
      },
      description: 'Set the page URL',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },

    headingUI('Page content'),
    {
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: sectionsIndex,
      options: { editModal: 'fullscreen' },
      validation: (Rule) =>
        Rule.required().min(1).error('At least one page section is required'),
    },
    headingUI('Page metadata'),
    {
      name: 'metadataTitle',
      title: 'Metadata title',
      description:
        'Used in browser tab titles and social media. Falls back to global metadata settings if not set',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning(
          'Metadata title has not been set and will fall back to global metadata settings'
        ),
    },
    {
      name: 'metadataDescription',
      title: 'Metadata description',
      description: 'Used in social media and search engine listings',
      type: 'text',
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning(
          'Metadata description has not been set and will fall back to global metadata settings'
        ),
    },
    {
      name: 'metadataImage',
      title: 'Metadata image',
      description:
        'Used in social media and search engine listings. Falls back to global metadata settings if not set',
      type: 'text',
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning(
          'Metadata image has not been set and will fall back to global metadata settings'
        ),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
