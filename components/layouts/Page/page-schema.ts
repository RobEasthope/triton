import { sectionsIndex } from '../../sections/sections-index';
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
  ],
  initialValue: {
    hidePage: false,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: { title: string }): Record<string, unknown> {
      return {
        title,
      };
    },
  },
};
