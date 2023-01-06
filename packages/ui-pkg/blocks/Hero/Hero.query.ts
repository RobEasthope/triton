import groq from "groq";

export const HERO_QUERY = groq`{
  _type,
  _key,
  logo,
  heading,
  bkgMode,
  bkgImage,
  "bkgVideo": rawBackgroundVideo.asset->,
  caption
}`;
