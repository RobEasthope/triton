import { BiText } from "react-icons/bi";
import { blockPreview } from "sanity-pills";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "Text",
  title: "Text",
  icon: BiText,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "ArticleText",
      validation: (Rule) => Rule.required().warning("Text: Text is missing"),
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      return {
        ...sanityPreviewTitles({
          title: blockPreview(text),
          component: "Text",
        }),
      };
    },
  },
};
