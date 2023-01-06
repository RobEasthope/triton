import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { MdParagliding } from "react-icons/md";

export default {
  name: "Trip",
  title: "Trip date",
  type: "document",
  icon: MdParagliding,
  fields: [
    {
      name: "rawCourse",
      title: "Course",
      type: "reference",
      to: [{ type: "Course" }],
      description: "Select a course",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Course is missing"),
    },
    {
      name: "startDate",
      title: "Start date",
      type: "date",
      description: "Dates set are in DD-MM-YYYY format",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Start date is missing"),
    },
    {
      name: "endDate",
      title: "End date",
      type: "date",
      description: "Dates set are in DD-MM-YYYY format",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required()
          .error("End date is missing")
          .min(Rule.valueOfField("startDate"))
          .error("The end date is before the start date"),
    },
    {
      name: "totalSpaces",
      title: "Spaces",
      type: "number",
      description: "Total number of spaces on the trip",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error("Total number of spaces on the trip is required"),
    },
    {
      name: "spacesTaken",
      title: "Spaces taken",
      type: "number",
      description: "Spaces taken",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required()
          .error("Spaces taken on the trip is required")
          .max(Rule.valueOfField("totalSpaces"))
          .error("The trip appears to be overbooked"),
    },
  ],
  initialData: {
    spacesTaken: 0,
  },
  orderings: [
    {
      title: "Trip start date (Newest)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Trip start date (Oldest)",
      name: "startDateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      startDate: "startDate",
      endDate: "endDate",
      course: "rawCourse.name",
      courseType: "rawCourse.rawCourseType.name.current",
      metadataImage: "rawCourse.metadataImage",
      spacesTaken: "spacesTaken",
      totalSpaces: "totalSpaces",
    },
    prepare({
      startDate,
      endDate,
      course,
      courseType,
      metadataImage,
      spacesTaken,
      totalSpaces,
    }) {
      dayjs.extend(advancedFormat);
      // Date formatting
      dayjs.extend(advancedFormat);

      const formattedStartDate = dayjs.default(startDate).format("MMM Do");
      const formattedEndDate = dayjs.default(endDate).format("MMM Do YYYY");

      // Trip title
      const formattedTitle = `${startDate ? formattedStartDate : ""}${
        endDate ? ` - ${formattedEndDate}` : ""
      }`;

      // Trip statistics
      let tripStats = "";

      if (spacesTaken < totalSpaces || spacesTaken === 0) {
        tripStats = `${`Spaces filled: ${spacesTaken} / ${totalSpaces} | `}`;
      }

      if (spacesTaken === totalSpaces && totalSpaces) {
        tripStats = "Trip full 🎉 |";
      }

      return {
        title: formattedTitle || "Awaiting details...",
        subtitle: `${tripStats && `${tripStats}`}${
          course ? `${course} | ` : "No course selected"
        }${courseType && `${courseType}`}`,
        media: metadataImage,
      };
    },
  },
};
