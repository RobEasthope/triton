import { anyPageBySlugQuery } from '@/UI/pages/Page/Page.queries';
import { createSlugFromQuery } from '@/UTILS/sanity/createSlugFromQuery';

type SelectSanityQueryProps = {
  sanityQuery: string;
  queryParams: { slug: string };
};

export function selectSanityQuery(slugArray = []): SelectSanityQueryProps {
  if (slugArray.length === 0) {
    return {
      sanityQuery: anyPageBySlugQuery,
      queryParams: { slug: 'root' },
    };
  }

  return {
    sanityQuery: anyPageBySlugQuery,
    queryParams: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      slug: createSlugFromQuery(slugArray),
    },
  };
}
