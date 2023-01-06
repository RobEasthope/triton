import { RiFlightTakeoffFill } from "react-icons/ri";
import { sanityPreviewTitles } from "sanity-app/utils/sanityPreviewTitles";

export default {
  name: "TripIndex",
  title: "Trip index",
  type: "object",
  icon: RiFlightTakeoffFill,
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
      name: "noUpcomingTrips",
      title: "No upcoming trips",
      description: "Displayed when there are no upcoming trips scheduled in",
      type: "BasicText",
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        ...sanityPreviewTitles({
          title: heading,
          component: "Trip index",
        }),
      };
    },
  },
};
