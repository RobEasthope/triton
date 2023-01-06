import { BiHeading } from "react-icons/bi";
import { headingUI } from "sanity-app/utils/headingUI";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "CentredCTA",
  title: "Centred CTA",
  icon: BiHeading,
  fields: [
    headingUI("Foreground"),
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "rawLink",
      title: "Button link",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Button link: No link has been added").max(1),
    },
    headingUI("Background"),
    {
      name: "bkgMode",
      title: "Background mode",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Course hero: Background mode has not been set"),
    },
    {
      name: "bkgImage",
      title: "Background image",
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
      hidden: ({ parent }) => parent?.bkgMode !== "image",
    },
    {
      name: "rawBackgroundVideo",
      title: "Background video",
      type: "mux.video",
      hidden: ({ parent }) => parent?.bkgMode !== "video",
    },
    {
      name: "caption",
      title: "Background caption",
      type: "text",
      hidden: ({ parent }) => !parent?.bkgMode,
    },
  ],
  preview: {
    select: {
      heading: "heading",
      bkgImage: "bkgImage",
    },
    prepare({ heading, bkgImage }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Centered CTA" }),
        media: bkgImage,
      };
    },
  },
};
