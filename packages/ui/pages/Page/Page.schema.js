import { SECTIONS_INDEX } from '../../content/SECTIONS_INDEX';
import { headingUI } from '../../utils/sanity/headingUI';

export default {
  name: 'Page',
  title: 'Page',
  type: 'document',
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
      name: 'rawSections',
      title: 'Page sections',
      type: 'array',
      of: SECTIONS_INDEX,
      options: { editModal: 'fullscreen' },
      validation: (Rule) =>
        Rule.required().min(1).error('At least one page section is required'),
    },
    headingUI('Page metadata'),
    {
      name: 'metadataTitle',
      title: 'Metadata title',
      description: 'Used in browser tab titles and social media',
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
      description: 'Used in social media and search engine listings.',
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
