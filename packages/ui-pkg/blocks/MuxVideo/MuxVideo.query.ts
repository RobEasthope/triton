import groq from "groq";

export const MUX_VIDEO_QUERY = groq`{
  _type,
  _key,
  "muxVideo": rawMuxVideo.asset->,
  caption,
  maxWidth
}`;
