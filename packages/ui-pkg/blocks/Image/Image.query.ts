import groq from "groq";

export const IMAGE_QUERY = groq`{
  _type,
  _key,
  image,
  aspectRatio,
  maxWidth,
}`;
