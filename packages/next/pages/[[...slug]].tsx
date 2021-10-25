/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { GetStaticPaths, InferGetStaticPropsType } from 'next';

import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page } from '@/components/docs/Page/Page';
import { Home } from '@/components/docs/Home/Home';
import { Loading } from '@/components/base/app/Loading/Loading';

import {
  anyPageBySlugQuery,
  globalsQuery,
  pageSlugsQuery,
} from '@/utils/sanity/queries';
import { usePreviewSubscription } from '@/utils/sanity/sanity-utils';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/utils/sanity/sanity.server';
import { selectSanityQuery } from '@/utils/sanity/selectSanityQuery';
import { AppMetadata } from '@/components/base/app/AppMetadata/AppMetadata';

export default function PageBySlug({ data, preview }) {
  const router = useRouter();
  const { isFallback } = router;

  const {
    data: { page },
  } = usePreviewSubscription(anyPageBySlugQuery, {
    params: { slug: data?.page?.slug },
    initialData: data,
    // enabled: preview && slug,
  });

  if (data.page === null) {
    return <Custom404 />;
  }

  return (
    <>
      <AppMetadata />

      {isFallback && <Loading />}
      {!isFallback && data?.page?._type === 'Page' && (
        <Page page={data?.page} globals={data?.globals} preview={preview} />
      )}
      {!isFallback && data?.page?._type === 'Home' && (
        <Home page={data?.page} globals={data?.globals} preview={preview} />
      )}
    </>
  );
}

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { slug: [] };
  preview: boolean;
}) => {
  const globals = await getClient(preview).fetch(globalsQuery);

  const { sanityQuery, queryParams } = selectSanityQuery(params.slug);

  const page = overlayDrafts(
    await getClient(preview).fetch(sanityQuery, queryParams)
  );

  return {
    props: {
      data: { page: page[0] || null, globals },
      preview,
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = [];

  const pages = await sanityClient.fetch(pageSlugsQuery);

  for (const page of pages) {
    const slug = page?.slug?.current as string;

    paths.push({
      params: { slug: slug?.split('/').filter((p) => p) },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};
