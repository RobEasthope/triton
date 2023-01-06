import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { RiQuillPenLine } from "react-icons/ri";
import { noDuplicateRefs } from "sanity-pills";
import { headingUI } from "sanity-app/utils/headingUI";
import { BLOG_POST_SLUG } from "ui-pkg/pages/BlogPost/constants/BLOG_POST_SLUG";

export default {
  name: "BlogPost",
  type: "document",
  title: "BlogPost",
  icon: RiQuillPenLine,
  fields: [
    headingUI("Page details"),
    {
      name: "title",
      title: "Blog title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Blog title is missing"),
    },

    {
      name: "slug",
      title: "Page url/slug",
      type: "slug",
      description: "Set the page URL",
      options: {
        source: "title",
        slugify: (input) => {
          const formattedSlug = formatSlug(input);

          return `${BLOG_POST_SLUG}/${formattedSlug}`;
        },
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("The slug is missing"),
    },
    {
      name: "rawBlogAuthor",
      title: "Blog author",
      type: "reference",
      to: [{ type: "BlogAuthor" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rawBlogCategories",
      title: "Blog categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "BlogCategory" }],
          options: {
            filter: noDuplicateRefs,
          },
        },
      ],
    },
    {
      name: "publicationDate",
      title: "Publication date",
      type: "date",
      description:
        "Used to sort the order of the blog indexes. Dates set are in DD-MM-YYYY format",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    headingUI("Blog content"),
    {
      name: "text",
      title: "Blog text",
      type: "ArticleText",
      validation: (Rule) => Rule.required().error("Blog text is missing"),
    },
    headingUI("Metadata"),
    {
      name: "metadataDescription",
      title: "Short blog description",
      description: "Used on blog site listings, social media, and search engine listings",
      type: "text",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Short blog description has not been set"),
    },
    {
      name: "metadataImage",
      title: "Blog thumbnail image",
      description: "Used on blog site listings, social media, and search engine listings",
      type: "image",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error(
          "Blog thumbnail image has not been set and will fall back to global metadata settings"
        ),
    },
  ],
  preview: {
    select: {
      title: "title",
      publicationDate: "publicationDate",
      metadataImage: "metadataImage",
    },
    prepare({ title, publicationDate, metadataImage }) {
      dayjs.extend(advancedFormat);

      const formattedPublicationDate = dayjs
        .default(publicationDate)
        .format("MMMM Do YYYY");

      return {
        title: title || "Blog post",
        subtitle: title
          ? `Blog Post ${formattedPublicationDate && ` | ${formattedPublicationDate}`}`
          : null,
        media: metadataImage,
      };
    },
  },
};
