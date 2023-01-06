import { RiVimeoFill } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";
import { MAX_CONTENT_OPTIONS } from "ui-pkg/constants/MAX_CONTENT_OPTIONS";

export default {
  type: "object",
  name: "VimeoVideo",
  title: "Vimeo video",
  icon: RiVimeoFill,
  fields: [
    {
      name: "url",
      title: "Vimeo URL",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "maxWidth",
      title: "Max width",
      type: "string",
      description: "Defaults to large",
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    },
  ],
  preview: {
    select: {
      caption: "caption",
    },
    prepare({ caption }) {
      return {
        ...sanityPreviewTitles({ title: caption, component: "Vimeo video" }),
      };
    },
  },
};
