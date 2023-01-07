import groq from "groq";

export const TEXT_QUERY = groq`{
  _type,
  _key,
  text
}`;
