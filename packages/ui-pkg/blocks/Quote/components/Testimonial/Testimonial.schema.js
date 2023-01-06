import { RiDoubleQuotesL } from "react-icons/ri";
import { blockPreview } from "sanity-pills";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "document",
  name: "Testimonial",
  title: "Testimonial",
  icon: RiDoubleQuotesL,
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "BasicText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Quote missing"),
    },
    {
      name: "quotee",
      title: "Quotee",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Quotee missing"),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning("Photo is missing"),
    },
  ],
  preview: {
    select: {
      quotee: "quotee",
      quote: "quote",
      photo: "photo",
    },
    prepare({ quote, quotee, photo }) {
      const formattedQuote = quote ? blockPreview(quote) : null;
      const formattedQuotee = quote ? quotee : null;

      const formattedTitle = () => {
        if (!formattedQuote && !formattedQuotee) {
          return null;
        }

        return `${formattedQuotee}${
          formattedQuote && formattedQuotee && " / "
        }${formattedQuote}`;
      };

      return {
        ...sanityPreviewTitles({
          title: formattedTitle(),
          component: "Testimonial",
        }),
        media: photo,
      };
    },
  },
};
