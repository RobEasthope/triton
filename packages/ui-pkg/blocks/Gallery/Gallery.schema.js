import { RiGalleryLine } from "react-icons/ri";
import { headingUI } from "sanity-app/utils/headingUI";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";
import { ASPECT_RATIOS } from "ui-pkg/constants/ASPECT_RATIOS";
import { MAX_CONTENT_OPTIONS } from "ui-pkg/constants/MAX_CONTENT_OPTIONS";

export default {
  type: "object",
  name: "Gallery",
  title: "Gallery",
  icon: RiGalleryLine,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "GalleryImage" }],
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning("Gallery: No images have been added to the gallery"),
    },
    {
      name: "galleryCaption",
      title: "Gallery caption",
      type: "string",
    },
    headingUI("Gallery layout"),
    {
      name: "columns",
      title: "Number of columns",
      type: "string",
      description: "Number of columns at full size",
      options: {
        list: [
          { title: "One", value: "1" },
          { title: "Two", value: "2" },
          { title: "Three", value: "3" },
          { title: "Four", value: "4" },
        ],
        layout: "radio",
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Gallery: Please select the desired number of columns"),
    },
    {
      name: "aspectRatio",
      title: "Gallery aspect ratio",
      type: "number",
      options: {
        list: ASPECT_RATIOS,
        layout: "radio",
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Gallery: Please select an aspect ratio"),
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
      galleryCaption: "galleryCaption",
      images: "images",
    },
    prepare({ galleryCaption, images }) {
      return {
        ...sanityPreviewTitles({ title: galleryCaption, component: "Gallery" }),
        media: images[0].image,
      };
    },
  },
};
