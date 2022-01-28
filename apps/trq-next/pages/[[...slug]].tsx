import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Home, HomeProps } from '@/UI/pages/Home/Home';
import { Loading } from '@/UI/base/app/Loading/Loading';
import {
  anyPageBySlugQuery,
  pageSlugsQuery,
} from '@/UI/pages/Page/Page.queries';
import { usePreviewSubscription } from '@/UTILS/sanity-api/sanity-utils';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/UTILS/sanity-api/sanity.server';
import { selectSanityQuery } from '@/TRQ/sanity-api/selectSanityQuery';

import { appGlobalsQuery } from '@/UI/base/settings/app-globals.queries';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';

type PageBySlugProps = {
  data: {
    page: PageProps | HomeProps;
    globals: AppGlobalsProps;
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
  const globals: {
    header: HeaderProps;
    globals: GlobalMetadata;
    settings: Settings;
  } = await getClient(preview).fetch(appGlobalsQuery);

  const { sanityQuery, queryParams } = selectSanityQuery(
    params?.slug || [],
    globals?.settings?.homePageSlug?.current
  );

  const page = overlayDrafts(
    await getClient(preview).fetch(sanityQuery, queryParams)
  );

  return {
    props: {
      data: { page: (page[0] as PageProps | HomeProps) || null, globals },
      preview,
    },
    revalidate: 60,
  };
};
