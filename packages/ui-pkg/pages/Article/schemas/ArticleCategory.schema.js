import { AiOutlineTags } from "react-icons/ai";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "ArticleCategory",
  type: "document",
  title: "Article category",
  icon: AiOutlineTags,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "slug",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Article category name is missing"),
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
          component: "Article category",
        }),
      };
    },
  },
};
