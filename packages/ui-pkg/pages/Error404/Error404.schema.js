export default {
  name: "Error404",
  title: "Error404",
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
      name: "heading",
      title: "Heading",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
    {
      name: "rawCards",
      title: "Page links",
      type: "array",
      of: [{ type: "Error404NavCard" }],
    },
    {
      name: "goBackTitle",
      title: "Go back button title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Error 404",
      };
    },
  },
};
