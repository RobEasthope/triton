import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Home, HomeProps } from '@/UI/pages/Home/Home';
import { Loading } from '@/UI/base/app/Loading/Loading';
import { pageSlugsQuery } from '@/UI/pages/Page/Page.queries';
import { globalsQuery } from '@/TRQ/sanity-api/queries';
import { getClient, sanityClient } from '@/UTILS/sanity-api/sanity.server';
import { selectSanityQuery } from '@/TRQ/sanity-api/selectSanityQuery';
import { GlobalMetadata } from '@/UI/types/sanity-schema';
import { HeaderProps } from '@/UI/navigation/Header/Header';

type PageBySlugProps = {
  data: {
    page: PageProps | HomeProps;
    globals: { header: HeaderProps; metadata: GlobalMetadata };
  };
};

export default function PageBySlug({ data }: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  if (data.page === null) {
    return <Custom404 />;
  }

  return (
    <>
      {isFallback && <Loading />}

      {!isFallback && data?.page?._type === 'Page' && (
        <Page page={data?.page} globals={data?.globals} />
      )}

      {!isFallback && data?.page?._type === 'Home' && (
        <Home page={data?.page} globals={data?.globals} />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(pageSlugsQuery)) as [
    PageProps | HomeProps
  ];

  for (const page of pages) {
    const slug = page?.slug?.current;

    paths.push({
      params: { slug: slug?.split('/').filter((p) => p) },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { slug: string[] };
  preview: boolean;
}) => {
  const globals: GlobalMetadata = await getClient(preview).fetch(globalsQuery);

  const { sanityQuery, queryParams } = selectSanityQuery(params?.slug);

  const page: PageProps | HomeProps = await getClient(preview).fetch(
    sanityQuery,
    queryParams
  );

  return {
    props: {
      data: { page: page || null, globals },
    },
    revalidate: 60,
  };
};
