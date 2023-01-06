import groq from "groq";

export const SPACER_QUERY = groq`{
  _type,
  _key,
  height
}`;
