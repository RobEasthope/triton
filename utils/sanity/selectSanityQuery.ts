import { anyPageBySlugQuery } from 'utils/sanity/queries';

import { createSlugFromQuery } from './createSlugFromQuery';

export function selectSanityQuery(slugArray = [], locale: string) {
  if (slugArray.length === 0) {
    return {
      sanityQuery: anyPageBySlugQuery,
      queryParams: { slug: 'root', locale },
    };
  }

  return {
    sanityQuery: anyPageBySlugQuery,
    queryParams: {
      slug: createSlugFromQuery(slugArray),
      locale,
    },
  };
}
