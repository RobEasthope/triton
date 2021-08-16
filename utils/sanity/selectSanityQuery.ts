import { anyPageBySlugQuery } from 'utils/sanity/queries';

import { createSlugFromQuery } from './createSlugFromQuery';

export function selectSanityQuery(slugArray = []) {
  if (slugArray.length === 0) {
    return {
      sanityQuery: anyPageBySlugQuery,
      queryParams: { slug: 'root' },
    };
  }

  return {
    sanityQuery: anyPageBySlugQuery,
    queryParams: {
      slug: createSlugFromQuery(slugArray),
    },
  };
}
