import React from 'react';
import { ALL_PAGES_TYPES } from '../../../../utils/sanity-snippets/ALL_PAGE_TYPES';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link',
  name: 'internalLink',
  type: 'object',
  description: 'Link to a document on the site',
  fields: [
    {
      name: 'internalUID',
      title: 'Page',
      type: 'reference',
      to: ALL_PAGES_TYPES,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: 'Internal link',
      };
    },
  },
};
