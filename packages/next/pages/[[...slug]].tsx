/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { GetStaticPaths, InferGetStaticPropsType } from 'next';

import Custom404 from 'pages/404';
import { Page } from 'components/docs/Page/Page';
import { HomePage } from 'components/docs/HomePage/HomePage';

import { useRouter } from 'next/router';
import Head from 'next/head';
import { Loading } from 'components/base/rendering/Loading/Loading';

import {
  anyPageBySlugQuery,
  globalsQuery,
  pageSlugsQuery,
} from 'utils/sanity/queries';
import { usePreviewSubscription } from 'utils/sanity/sanity-utils';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from 'utils/sanity/sanity.server';
import { selectSanityQuery } from 'utils/sanity/selectSanityQuery';
import { METADATA } from 'settings/consts/METADATA';

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
      <Head>
        <title>{METADATA.TITLE}</title>

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3fc0ac" />
        <meta name="msapplication-TileColor" content="#3fc0ac" />
        <meta name="theme-color" content="#3fc0ac" />
      </Head>
      {isFallback && <Loading />}
      {!isFallback && data?.page?._type === 'page' && (
        <Page page={data?.page} globals={data?.globals} preview={preview} />
      )}
      {!isFallback && data?.page?._type === 'homePage' && (
        <HomePage page={data?.page} globals={data?.globals} preview={preview} />
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
