export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'rawNavigation',
      title: 'Header navigation',
      type: 'array',
      of: [
        { type: 'internalLinkWithTitle' },
        { type: 'externalLinkWithTitle' },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
};
