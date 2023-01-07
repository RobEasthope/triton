import groq from "groq";

export const YOUTUBE_VIDEO_QUERY = groq`{
  _type,
  _key,
  url,
  caption,
  maxWidth
}`;
