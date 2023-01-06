export default {
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "rawPrimaryNavigation",
      title: "Primary header navigation",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    },
    // {
    //   name: 'rawSecondaryNavigation',
    //   title: 'Secondary header navigation',
    //   type: 'array',
    //   of: [
    //     { type: 'InternalLinkWithTitle' },
    //     { type: 'ExternalLinkWithTitle' },
    //   ],
    //   codegen: { required: true },
    //   validation: (Rule) =>
    //     Rule.required().warning('No navigation links have been added'),
    // },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
};
