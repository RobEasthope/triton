import { createBlockValidator } from "sanity-pills";

const basicTextValidator = createBlockValidator({
  // Basic validation rules
  noEmptyBlocks: true,
  noNewlines: true,
});

export default {
  name: "BasicText",
  title: "Basic text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [{ type: "InternalLink" }, { type: "ExternalLink" }],
      },
    },
  ],
  validation: basicTextValidator,
};
