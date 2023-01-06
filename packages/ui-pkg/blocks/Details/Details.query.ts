import groq from "groq";

export const DETAILS_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  details,
  columns,
}`;
