import { sectionsIndex } from '../../../.sanity-studio/schemas/sections-index';
import { headingUI } from '../../../.sanity-studio/ui/headingUI';

export default {
  name: 'homePage',
  type: 'document',
  title: 'Home page',
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
      description: 'Set the page URL',
      options: {
        source: 'title',
        maxLength: 30,
      },
      hidden: true,
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
  ],
  initialValue: {
    slug: { _type: 'slug', current: 'root' },
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home page',
      };
    },
  },
};
