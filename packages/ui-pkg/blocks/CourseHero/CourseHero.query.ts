import groq from "groq";

export const COURSE_HERO_QUERY = groq`{
  _type,
  _key,
  bkgMode,
  bkgImage,
  "bkgVideo": rawBackgroundVideo.asset->,
  caption
}`;
