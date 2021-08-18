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
        { type: 'primaryInternalNavLink' },
        { type: 'primaryExternalNavLink' },
      ],
    },
    {
      name: 'headerLogo',
      title: 'Header logo',
      type: 'image',
    },
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Header',
      };
    },
  },
};
