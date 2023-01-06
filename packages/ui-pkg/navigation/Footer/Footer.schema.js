import { headingUI } from "sanity-app/utils/headingUI";

export default {
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "rawFooterNavigation",
      title: "Footer navigation",
      type: "array",
      of: [{ type: "LinksList" }],
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("No footer navigation links have been added"),
    },
    {
      name: "showCourseList",
      title: "Show Course list",
      type: "boolean",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Course list visibility has not been set"),
    },
    {
      name: "rawLegalNavigation",
      title: "Legal navigation",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("No legal navigation links have been added"),
    },
    headingUI("FFA logo"),
    {
      name: "logo",
      title: "FFA logo",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("FFA logo has not been added"),
    },
    headingUI("BHPA logo"),
    {
      name: "bhpaLogo",
      title: "BHPA logo",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("BHPA logo has not been added"),
    },
    {
      name: "bhpaLink",
      title: "BHPA url",
      type: "url",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
