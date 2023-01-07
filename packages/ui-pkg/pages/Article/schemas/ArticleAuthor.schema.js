import { RiUserLine } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "ArticleAuthor",
  type: "document",
  title: "Article author",
  icon: RiUserLine,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "slug",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "profile",
      title: "Profile",
      type: "text",
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
    },
  ],
  preview: {
    select: {
      name: "name.current",
      photo: "photo",
    },
    prepare({ name, photo }) {
      return {
        ...sanityPreviewTitles({
          title: name,
          component: "Article author",
        }),
        media: photo,
      };
    },
  },
};
