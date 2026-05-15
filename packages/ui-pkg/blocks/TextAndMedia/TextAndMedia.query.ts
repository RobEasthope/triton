import groq from "groq";

export const TEXT_AND_MEDIA_QUERY = groq`{
  _type,
  _key,
  heading,
  text,
  mediaType,
  media,
  youtubeUrl,
  mediaCaption,
  alignment,
}`;
