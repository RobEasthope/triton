import { VscQuote } from "react-icons/vsc";
import { handleQuoteSanityPreviewData } from "./utils/handleQuoteSanityPreviewData";

export default {
  type: "object",
  name: "Quote",
  title: "Quote",
  icon: VscQuote,
  fields: [
    {
      name: "quoteType",
      title: "Quote type",
      type: "string",
      options: {
        list: [
          { title: "Quote", value: "quote" },
          { title: "Testimonial", value: "testimonial" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Quote: Quote type has not been set"),
    },
    // Typed quote
    {
      name: "quote",
      title: "Quote",
      type: "BasicText",
      hidden: ({ parent }) => parent?.quoteType !== "quote",
    },
    {
      name: "quotee",
      title: "Quotee",
      type: "string",
      hidden: ({ parent }) => parent?.quoteType !== "quote",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.quoteType !== "quote",
    },
    // Testimonial
    {
      name: "rawTestimonial",
      title: "Testimonial",
      type: "reference",
      to: [{ type: "Testimonial" }],
      hidden: ({ parent }) => parent?.quoteType !== "testimonial",
    },
  ],
  preview: {
    select: {
      quoteType: "quoteType",

      // Quote
      quotee: "quotee",
      photo: "photo",

      // Testimonial
      testimonialQuote: "rawTestimonial.quote",
      testimonialQuotee: "rawTestimonial.quotee",
      testimonialPhoto: "rawTestimonial.photo",
    },
    prepare({
      quoteType,
      quote,
      quotee,
      photo,
      testimonialQuote,
      testimonialQuotee,
      testimonialPhoto,
    }) {
      const preview = handleQuoteSanityPreviewData({
        quoteType,
        quote,
        quotee,
        photo,
        testimonialQuote,
        testimonialQuotee,
        testimonialPhoto,
      });

      return {
        title: `${preview?.quote || ""}${preview?.quote !== null ? " | " : ""}${
          preview?.quotee
        }`,
        subtitle: "Quote/Testimonial",
        media: preview?.photo,
      };
    },
  },
};
