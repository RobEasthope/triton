import { BiText } from "react-icons/bi";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "Announcement",
  title: "Announcement",
  icon: BiText,
  fields: [
    {
      name: "text",
      title: "Announcement text",
      type: "string",
      validation: (Rule) => Rule.required().error("Announcement: Text is missing"),
    },
    {
      name: "rawLink",
      title: "Link",
      type: "array",
      of: [{ type: "InternalLink" }, { type: "ExternalLink" }],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text, metadataImage }) {
      return {
        ...sanityPreviewTitles({
          title: text,
          component: "Announcement",
        }),
        media: metadataImage,
      };
    },
  },
};
