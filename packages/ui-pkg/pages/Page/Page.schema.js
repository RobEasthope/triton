import { RiFileList2Line } from "react-icons/ri";
import { headingUI } from "sanity-app/utils/headingUI";
import Image from "ui-pkg/blocks/Image/Image.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import TextAndMedia from "ui-pkg/blocks/TextAndMedia/TextAndMedia.schema";
import YoutubeVideo from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema";

export default {
  name: "Page",
  type: "document",
  title: "Page",
  icon: RiFileList2Line,
  fields: [
    headingUI("Page details"),
    {
      name: "title",
      title: "Page title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 30,
      },
      description: "Set the page URL",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required()
          // Block preview slug to prevent a routing clash
          .custom((slug) =>
            slug?.current !== "preview" ? true : "Preview is a reserved slug"
          )
          .error(),
    },

    headingUI("Page content"),
    {
      name: "sections",
      title: "Page sections",
      type: "array",
      of: [
        { type: Image.name },
        { type: Spacer.name },
        { type: Text.name },
        { type: TextAndMedia.name },
        { type: YoutubeVideo.name },
      ],
      options: { editModal: "fullscreen" },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().min(1).error("At least one page section is required"),
    },
    headingUI("Metadata"),
    {
      name: "metadataDescription",
      title: "Page description",
      description: "Used on site navigation, social media, and search engine listings",
      type: "text",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning(
          "A page description has not been set and will fall back to global metadata settings"
        ),
    },
    {
      name: "metadataImage",
      title: "Page thumbnail",
      description: "Used on site navigation, social media, and search engine listings",
      type: "image",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().warning(
          "A page thumbnail has not been set and will fall back to global metadata settings"
        ),
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title, slug }) {
      const subtitle = slug.current === "home" ? "Home page" : "Page";

      return {
        title: title || "Page",
        subtitle: title ? subtitle : null,
      };
    },
  },
};
