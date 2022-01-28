import { anyPageBySlugQuery } from '@/UI/pages/Page/Page.queries';
import { createSlugFromQuery } from '@/UTILS/sanity-api/createSlugFromQuery';

type SelectSanityQueryProps = {
  sanityQuery: string;
  queryParams: { slug: string };
};

export function selectSanityQuery(
  slugArray: string[] | [],
  homePageSlug: string
): SelectSanityQueryProps {
  if (slugArray.length === 0) {
    return {
      sanityQuery: anyPageBySlugQuery,
      queryParams: { slug: homePageSlug },
    };
  }

  return {
    sanityQuery: anyPageBySlugQuery,
    queryParams: {
      slug: createSlugFromQuery(slugArray),
    },
  };
}
