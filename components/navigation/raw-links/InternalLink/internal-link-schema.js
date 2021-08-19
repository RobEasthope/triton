import React from 'react';
import { RiLinksLine } from 'react-icons/ri';
import { ALL_PAGES_TYPES } from '../../../../utils/sanity-snippets/ALL_PAGE_TYPES';

const InternalLinkRender = ({ children }) => (
  <span>
    {children} <RiLinksLine />
  </span>
);

export default {
  title: 'Internal link',
  name: 'internalLink',
  type: 'object',
  description: 'Link to a page on the site',
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
    // eslint-disable-next-line react/display-name
    icon: () => <RiLinksLine />,
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
  displayName: 'InternalLink',
};
