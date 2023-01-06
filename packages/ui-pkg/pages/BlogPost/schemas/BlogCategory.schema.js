import { AiOutlineTags } from "react-icons/ai";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "BlogCategory",
  type: "document",
  title: "Blog category",
  icon: AiOutlineTags,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "slug",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Blog category name is missing"),
    },
  ],
  preview: {
    select: {
      name: "name.current",
    },
    prepare({ name }) {
      return {
        ...sanityPreviewTitles({
          title: name,
          component: "Blog category",
        }),
      };
    },
  },
};
