import { AiOutlineUnorderedList } from "react-icons/ai";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "Details",
  title: "Details",
  icon: AiOutlineUnorderedList,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "BasicText",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "DetailCard" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Details: No details added"),
    },
    {
      name: "columns",
      title: "Number of columns",
      type: "string",
      options: {
        list: [
          { title: "One", value: "1" },
          { title: "Two", value: "2" },
          { title: "Three", value: "3" },
          { title: "Four", value: "4" },
          { title: "Five", value: "5" },
        ],
        layout: "radio",
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Details: Please select the desired number of columns"),
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Details" }),
      };
    },
  },
};
