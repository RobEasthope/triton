import { headingUI } from "sanity-app/utils/headingUI";

export default {
  name: "MetadataSettings",
  title: "Page info/SEO fallbacks",
  type: "document",
  fields: [
    headingUI("App settings"),
    {
      name: "sitename",
      title: "Sitename",
      type: "string",
      description: "Used for SEO & descriptive purposes",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "The main site url. Used to create a canonical url",
    },
    headingUI("SEO/Metadata fallbacks"),
    {
      name: "titleFallback",
      title: "Page title",
      type: "string",
      description: "Can be overridden on a page by page basis in the pages Metadata tab.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "descriptionFallback",
      title: "Page description",
      type: "text",
      description: "Can be overridden on a page by page basis in the pages Metadata tab.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnailFallback",
      title: "Page thumbnail",
      type: "image",
      description: "Can be overridden on a page by page basis in the pages Metadata tab.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Page info/SEO fallbacks",
      };
    },
  },
};
