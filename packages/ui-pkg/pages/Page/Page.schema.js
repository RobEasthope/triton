import { RiFileList2Line } from "react-icons/ri";

import ArticleIndex from "ui-pkg/blocks/ArticleIndex/ArticleIndex.schema";
import CourseHero from "ui-pkg/blocks/CourseHero/CourseHero.schema";
import CourseIndex from "ui-pkg/blocks/CourseIndex/CourseIndex.schema";
import Details from "ui-pkg/blocks/Details/Details.schema";
import Gallery from "ui-pkg/blocks/Gallery/Gallery.schema";
import Hero from "ui-pkg/blocks/Hero/Hero.schema";
import Image from "ui-pkg/blocks/Image/Image.schema";
import LandingHero from "ui-pkg/blocks/LandingHero/LandingHero.schema";
import MuxVideo from "ui-pkg/blocks/MuxVideo/MuxVideo.schema";
import Profiles from "ui-pkg/blocks/Profiles/Profiles.schema";
import Questions from "ui-pkg/blocks/Questions/Questions.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import TextAndMedia from "ui-pkg/blocks/TextAndMedia/TextAndMedia.schema";
import TripIndex from "ui-pkg/blocks/TripIndex/TripIndex.schema";
import Quote from "ui-pkg/blocks/Quote/Quote.schema";
import Quotes from "ui-pkg/blocks/Quotes/Quotes.schema";
import YoutubeVideo from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema";
import VimeoVideo from "ui-pkg/blocks/VimeoVideo/VimeoVideo.schema";
import { headingUI } from "sanity-app/utils/headingUI";

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
        { type: ArticleIndex.name },
        { type: CourseHero.name },
        { type: CourseIndex.name },
        { type: Details.name },
        { type: Gallery.name },
        { type: Hero.name },
        { type: Image.name },
        { type: LandingHero.name },
        { type: MuxVideo.name },
        { type: Profiles.name },
        { type: Questions.name },
        { type: Text.name },
        { type: Spacer.name },
        { type: TextAndMedia.name },
        { type: TripIndex.name },
        { type: Quote.name },
        { type: Quotes.name },
        { type: VimeoVideo.name },
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
        // subtitle: title ? "Page" : null,
      };
    },
  },
};
