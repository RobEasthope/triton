export default {
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "rawFooterNavigation",
      title: "Footer navigation",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("No footer navigation links have been added"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
