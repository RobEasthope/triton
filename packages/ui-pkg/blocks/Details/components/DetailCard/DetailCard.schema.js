import { AiOutlineUnorderedList } from "react-icons/ai";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "document",
  name: "DetailCard",
  title: "Detail card",
  icon: AiOutlineUnorderedList,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Detail card: Heading is missing"),
    },
    {
      name: "text",
      title: "Text",
      type: "BasicText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Detail card: Text missing"),
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Detail card" }),
      };
    },
  },
};
