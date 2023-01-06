import { RiTreasureMapLine } from "react-icons/ri";

import CourseHero from "ui-pkg/blocks/CourseHero/CourseHero.schema";
import CourseIndex from "ui-pkg/blocks/CourseIndex/CourseIndex.schema";
import Details from "ui-pkg/blocks/Details/Details.schema";
import Gallery from "ui-pkg/blocks/Gallery/Gallery.schema";
import Hero from "ui-pkg/blocks/Hero/Hero.schema";
import Image from "ui-pkg/blocks/Image/Image.schema";
import MuxVideo from "ui-pkg/blocks/MuxVideo/MuxVideo.schema";
import Questions from "ui-pkg/blocks/Questions/Questions.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import TripIndex from "ui-pkg/blocks/TripIndex/TripIndex.schema";
import Quote from "ui-pkg/blocks/Quote/Quote.schema";
import Quotes from "ui-pkg/blocks/Quotes/Quotes.schema";
import YoutubeVideo from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema";
import VimeoVideo from "ui-pkg/blocks/VimeoVideo/VimeoVideo.schema";
import { headingUI } from "sanity-app/utils/headingUI";
import { COURSE_SLUG } from "ui-pkg/pages/Course/constants/COURSE_SLUG";
import { formatSlug } from "sanity-app/utils/formatSlug";

export default {
  name: "Course",
  type: "document",
  title: "Course",
  icon: RiTreasureMapLine,
  fields: [
    headingUI("Course details"),
    {
      name: "name",
      title: "Course name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Course name is missing"),
    },
    {
      name: "slug",
      title: "Page url/slug",
      type: "slug",
      description: "Set the page URL",
      options: {
        source: "name",
        slugify: (input) => {
          const formattedSlug = formatSlug(input);

          return `${COURSE_SLUG}/${formattedSlug}`;
        },
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("The slug is missing"),
    },
    {
      name: "rawCourseType",
      title: "Course type",
      type: "reference",
      to: [{ type: "CourseType" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Course type is missing"),
    },
    {
      name: "metadataDescription",
      title: "Course description",
      description:
        "Used on trip/course listings, social media, and search engine listings",
      type: "text",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error(
          "Course description has not been set and will fall back to global metadata settings"
        ),
    },
    {
      name: "courseActive",
      title: "Course active?",
      description:
        "Course set as inactive will be not be displayed on the site in any form. Active courses without any upcoming trips will still be rendered",
      type: "boolean",
    },
    headingUI("Page content"),
    {
      name: "sections",
      title: "Page sections",
      type: "array",
      of: [
        { type: CourseHero.name },
        { type: CourseIndex.name },
        { type: Details.name },
        { type: Gallery.name },
        { type: Hero.name },
        { type: Image.name },
        { type: MuxVideo.name },
        { type: Questions.name },
        { type: Spacer.name },
        { type: Text.name },
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
      name: "metadataImage",
      title: "Course thumbnail",
      description:
        "Used on trip/course listings, social media, and search engine listings",
      type: "image",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error(
          "A Course thumbnail has not been set and will fall back to global metadata settings"
        ),
    },
  ],
  initialData: {
    courseActive: true,
  },
  preview: {
    select: {
      name: "name",
      metadataImage: "metadataImage",
      courseType: "rawCourseType.name.current",
    },
    prepare({ name, courseType, metadataImage }) {
      return {
        title: name || "Course",
        subtitle: name ? `${courseType ? `${courseType} course` : ""}` : null,
        media: metadataImage,
      };
    },
  },
};
