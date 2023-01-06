import { RiQuestionLine } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "Questions",
  title: "Questions",
  icon: RiQuestionLine,
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
      name: "questions",
      title: "Questions",
      type: "array",
      of: [{ type: "QuestionCard" }],

      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Questions: No questions added"),
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Questions" }),
      };
    },
  },
};
