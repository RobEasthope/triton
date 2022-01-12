import { groq } from 'next-sanity';
import { getSections } from '@/TRQ/sanity-api/queries';

export const anyPageBySlugQuery = groq`
  *[_type in ["page", "homePage"] && slug.current == $slug]{
     ...,
    ${getSections},
  }
`;

// All page slugs
export const pageSlugsQuery = groq`
  *[_type == "page" || _type == "homePage" && defined(slug.current)]{
    slug {
      current
    },
  }
`;
