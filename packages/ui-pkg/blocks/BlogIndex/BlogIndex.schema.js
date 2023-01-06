import { RiQuillPenLine } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "BlogIndex",
  title: "Blog index",
  type: "object",
  icon: RiQuillPenLine,
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
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Blog index" }),
      };
    },
  },
};
