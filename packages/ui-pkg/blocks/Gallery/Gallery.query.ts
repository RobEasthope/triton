import groq from "groq";

export const GALLERY_QUERY = groq`{
  _type,
  _key,
  images,
  galleryCaption,
  columns,
  aspectRatio,
  maxWidth,
}`;
