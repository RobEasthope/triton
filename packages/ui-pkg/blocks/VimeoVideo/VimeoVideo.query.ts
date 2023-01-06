import groq from "groq";

export const VIMEO_VIDEO_QUERY = groq`{
  _type,
  _key,
  url,
  caption,
  maxWidth
}`;
