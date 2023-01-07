import { createBlockValidator } from "sanity-pills";

const articleTextValidator = createBlockValidator({
  // Basic validation rules
  noEmptyBlocks: true,
  noNewlines: true,
});

export default {
  name: "ArticleText",
  title: "Article text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Large heading", value: "h2" },
        { title: "Medium heading", value: "h3" },
        { title: "Small heading", value: "h4" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [{ type: "InternalLink" }, { type: "ExternalLink" }],
      },
    },
    { type: "Image" },
    { type: "YoutubeVideo" },
  ],
  validation: articleTextValidator,
};
