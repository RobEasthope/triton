import groq from "groq";
import { currentSanityDate } from "sanity-app/utils/currentSanityDate";

export const COURSE_INDEX_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  "upcomingCourses": *[_type == 'Course' && courseActive == true]{
    _id,
    name,
    slug,
    metadataDescription,
    metadataImage,
    "courseType": rawCourseType->name.current,
    "trips": *[_type== 'Trip' && references(^._id) && startDate > "${currentSanityDate}"],
  },
}`;
