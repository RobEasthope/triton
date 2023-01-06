import groq from "groq";

export const CENTRED_CTA_QUERY = groq`{
  _type,
  _key,
  heading,
  subheading,
  "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
  bkgMode,
  bkgImage,
  "bkgVideo": rawBackgroundVideo.asset->,
  caption
}`;
