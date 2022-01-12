import { groq } from 'next-sanity';
import { getSections } from '@/TRQ/sanity-api/queries';

export const HomeQuery = groq`
  *[_type == "homePage" && slug.current == $slug][0]{
    ...,
    ${getSections}
  }
`;
