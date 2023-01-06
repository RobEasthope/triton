import { currentSanityDate } from "sanity-app/utils/currentSanityDate";
import groq from "groq";

export const TRIP_INDEX_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  noUpcomingTrips,
  "upcomingTrips": *[_type == 'Trip' && references(^._id) && startDate > ${currentSanityDate}],
}`;
