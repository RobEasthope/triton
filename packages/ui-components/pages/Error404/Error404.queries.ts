import { groq } from 'next-sanity';

export const error404Query = groq`
  *[_type == "error404"]{
    ...
  }
`;
