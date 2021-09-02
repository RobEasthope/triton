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
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error('No navigation links have been added'),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      codegen: { required: true },
      validation: (Rule) => Rule.required().error('Logo is missing'),
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
