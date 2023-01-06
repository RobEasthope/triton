import { VscQuote } from "react-icons/vsc";

export default {
  type: "object",
  name: "Quotes",
  title: "Quotes",
  icon: VscQuote,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "BasicText",
    },
    {
      name: "rawQuotes",
      title: "Quotes",
      type: "array",
      of: [{ type: "Quote" }],
      validation: (Rule) =>
        Rule.required().warning("Quotes: No quotes or testimonials have been added"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Quotes",
      };
    },
  },
};
