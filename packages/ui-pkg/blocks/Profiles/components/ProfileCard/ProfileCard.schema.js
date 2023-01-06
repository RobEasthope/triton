import { CgProfile } from "react-icons/cg";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  type: "document",
  name: "ProfileCard",
  title: "Profile",
  icon: CgProfile,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Profile card: Heading missing"),
    },
    {
      name: "description",
      title: "Description",
      type: "BasicText",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Profile card: Text missing"),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      validation: (Rule) => Rule.required().warning("Profile card: Photo is missing"),
    },
  ],
  preview: {
    select: {
      name: "name",
      photo: "photo",
    },
    prepare({ name, photo }) {
      return {
        ...sanityPreviewTitles({ title: name, component: "Profile" }),
        media: photo,
      };
    },
  },
};
