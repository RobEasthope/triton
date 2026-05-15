import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { RiQuillPenLine } from "react-icons/ri";
import { noDuplicateRefs } from "sanity-pills";
import { headingUI } from "sanity-app/utils/headingUI";
import { ARTICLE_SLUG } from "ui-pkg/pages/Article/constants/ARTICLE_SLUG";

export default {
  name: "Article",
  type: "document",
  title: "Article",
  icon: RiQuillPenLine,
  fields: [
    headingUI("Page details"),
    {
      name: "title",
      title: "Article title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Article title is missing"),
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

          return `${ARTICLE_SLUG}/${formattedSlug}`;
        },
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("The slug is missing"),
    },
    {
      name: "rawArticleAuthor",
      title: "Article author",
      type: "reference",
      to: [{ type: "ArticleAuthor" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rawArticleCategories",
      title: "Article categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "ArticleCategory" }],
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
        "Used to sort the order of the article indexes. Dates set are in DD-MM-YYYY format",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    headingUI("Article content"),
    {
      name: "text",
      title: "Article text",
      type: "ArticleText",
      validation: (Rule) => Rule.required().error("Article text is missing"),
    },
    headingUI("Metadata"),
    {
      name: "metadataDescription",
      title: "Short article description",
      description:
        "Used on article site listings, social media, and search engine listings",
      type: "text",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Short article description has not been set"),
    },
    {
      name: "metadataImage",
      title: "Article thumbnail image",
      description:
        "Used on article site listings, social media, and search engine listings",
      type: "image",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error(
          "Article thumbnail image has not been set and will fall back to global metadata settings"
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
        title: title || "Article post",
        subtitle: title
          ? `Article Post ${formattedPublicationDate && ` | ${formattedPublicationDate}`}`
          : null,
        media: metadataImage,
      };
    },
  },
};
