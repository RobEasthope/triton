import { RiImage2Line } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";
import { ASPECT_RATIOS } from "ui-pkg/constants/ASPECT_RATIOS";
import { MAX_CONTENT_OPTIONS } from "ui-pkg/constants/MAX_CONTENT_OPTIONS";

export default {
  type: "object",
  name: "Image",
  title: "Image",
  icon: RiImage2Line,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      validation: (Rule) => Rule.required().warning("Image: Image is missing"),
    },
    {
      name: "aspectRatio",
      title: "Image aspect ratio",
      type: "number",
      description: "Defaults to original image aspect ratio",
      options: {
        list: ASPECT_RATIOS,
        layout: "radio",
      },
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
      caption: "image.caption",
      image: "image",
    },
    prepare({ caption, image }) {
      return {
        ...sanityPreviewTitles({ title: caption, component: "Image" }),
        media: image,
      };
    },
  },
};
