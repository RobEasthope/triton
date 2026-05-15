export default {
  name: "QuoteText",
  title: "Quote text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Italics", value: "em" },
        ],
        annotations: [],
      },
      lists: [],
    },
  ],
};
