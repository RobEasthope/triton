import { CgProfile } from "react-icons/cg";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "object",
  name: "Profiles",
  title: "Profiles",
  icon: CgProfile,
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
      name: "profiles",
      title: "Profiles",
      type: "array",
      of: [{ type: "ProfileCard" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Profiles: No profiles added"),
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({ title: heading, component: "Profiles" }),
      };
    },
  },
};
