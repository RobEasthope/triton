import { BsFileRichtext } from "react-icons/bs";
import { blockPreview } from "sanity-pills";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";
import { ALIGNMENT } from "ui-pkg/constants/ALIGNMENT";

export default {
  type: "object",
  name: "TextAndMedia",
  title: "Text & Media",
  icon: BsFileRichtext,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "BasicText",
      validation: (Rule) => Rule.required().warning("Text & Media: Text is missing"),
    },
    {
      name: "mediaType",
      title: "Media type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Youtube video", value: "youtube" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().warning("Text & Media: PLease select a media type"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      hidden: ({ parent }) => parent?.mediaType !== "image",
    },
    {
      name: "youtubeUrl",
      title: "Youtube URL",
      type: "string",
      hidden: ({ parent }) => parent?.mediaType !== "youtube",
    },
    {
      name: "mediaCaption",
      title: "Media caption",
      type: "string",
      hidden: ({ parent }) => !parent?.mediaType,
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      description: "Defaults to left alignment",
      options: {
        list: ALIGNMENT,
        layout: "radio",
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Text & Media: Please a layout alignment"),
    },
  ],
  preview: {
    select: {
      text: "text",
      image: "image",
    },
    prepare({ text, image }) {
      return {
        ...sanityPreviewTitles({
          title: blockPreview(text),
          component: "Text",
        }),
        media: image,
      };
    },
  },
};
