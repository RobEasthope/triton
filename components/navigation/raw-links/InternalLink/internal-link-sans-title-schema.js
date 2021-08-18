import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link',
  name: 'internalLinkSansTitle',
  type: 'object',
  description: 'Link to a document on the site',
  fields: [
    {
      name: 'internalUID',
      title: 'Page',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'homePage' },
        { type: 'successStoryPage' },
        { type: 'hubspotFormPage' },
      ],
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
