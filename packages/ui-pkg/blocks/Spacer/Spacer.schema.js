import { SPACER_OPTIONS } from "ui-pkg/constants/SPACER_OPTIONS";

export default {
  type: "object",
  name: "Spacer",
  title: "Spacer",
  fields: [
    {
      name: "height",
      title: "Height",
      type: "string",
      description: "Defaults to single",
      options: {
        list: SPACER_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      height: "height",
    },
    prepare({ height }) {
      return {
        title: "Spacer",
        subtitle: height,
      };
    },
  },
};
