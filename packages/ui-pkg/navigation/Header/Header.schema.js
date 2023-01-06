export default {
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
    {
      name: "rawPrimaryNavigation",
      title: "Primary header navigation",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
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
