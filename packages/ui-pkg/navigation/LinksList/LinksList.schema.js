export default {
  name: "LinksList",
  title: "Links list",
  type: "object",
  fields: [
    {
      name: "rawLinks",
      title: "Links",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Links list",
      };
    },
  },
};
