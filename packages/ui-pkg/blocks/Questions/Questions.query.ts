import groq from "groq";

export const QUESTIONS_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  questions,
}`;
