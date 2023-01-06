import { FaGraduationCap } from "react-icons/fa";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "CourseType",
  type: "document",
  title: "Course type",
  icon: FaGraduationCap,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "slug",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Course type name is missing"),
    },
  ],
  preview: {
    select: {
      name: "name.current",
    },
    prepare({ name }) {
      return {
        ...sanityPreviewTitles({
          title: name,
          component: "Course type",
        }),
      };
    },
  },
};
