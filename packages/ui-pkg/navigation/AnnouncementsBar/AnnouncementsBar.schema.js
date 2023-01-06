import { BiText } from "react-icons/bi";

export default {
  type: "object",
  name: "AnnouncementsBar",
  title: "Announcements bar",
  icon: BiText,
  fields: [
    {
      name: "rawAnnouncements",
      title: "Announcements",
      type: "array",
      of: [{ type: "Announcement" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "AnnouncementsBar",
      };
    },
  },
};
