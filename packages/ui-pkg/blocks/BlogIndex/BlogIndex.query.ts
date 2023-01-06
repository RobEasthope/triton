import groq from "groq";

export const BLOG_INDEX_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  "blogPosts": *[_type== 'BlogPost']{
    title,
    publicationDate,
    slug,
    metadataDescription,
    metadataImage,
  },
}`;
