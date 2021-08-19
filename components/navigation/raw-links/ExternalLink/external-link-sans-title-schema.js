import React from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';

const ExternalLinkRender = ({ children }) => (
  <span>
    {children} <RiExternalLinkLine />
  </span>
);

export default {
  title: 'External link',
  name: 'externalLinkSansTitle',
  type: 'object',
  description: 'Add a link to outside the site',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
  blockEditor: {
    icon: () => <RiExternalLinkLine />,
    render: ExternalLinkRender,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: 'External link',
      };
    },
  },
  displayName: 'ExternalLinkBlock',
};
