import groq from "groq";

export const PROFILES_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  profiles,
}`;
