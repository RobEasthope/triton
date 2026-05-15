import { ALL_PAGES_TYPES } from "sanity-app/constants/ALL_PAGES_TYPES";

export default {
  name: "Error404NavCard",
  title: "Error 404 Navigation Card",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "internalUID",
      title: "Page",
      type: "reference",
      to: ALL_PAGES_TYPES,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Error 404 Navigation Card",
        subtitle: title ? "Error 404 Navigation Card" : null,
      };
    },
  },
};
