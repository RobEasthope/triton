import groq from "groq";

export const METADATA_SETTINGS_QUERY = groq`
  *[_type== 'MetadataSettings' && !(_id in path("drafts.**"))][0]{
    sitename,
    canonicalUrl,
    titleFallback,
    descriptionFallback,
    thumbnailFallback
  }
`;
