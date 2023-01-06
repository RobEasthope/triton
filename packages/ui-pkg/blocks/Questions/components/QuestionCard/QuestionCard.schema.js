import { RiQuestionMark } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "document",
  name: "QuestionCard",
  title: "Question",
  icon: RiQuestionMark,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Question: Question missing"),
    },
    {
      name: "answer",
      title: "Answer",
      type: "BasicText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Question: Answer missing"),
    },
  ],
  preview: {
    select: {
      question: "question",
    },
    prepare({ question }) {
      return {
        ...sanityPreviewTitles({ title: question, component: "Question" }),
      };
    },
  },
};
