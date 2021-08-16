// TODO Improve [[slug]] typings
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { GetStaticPaths, InferGetStaticPropsType } from 'next';

import Custom404 from 'pages/404';
import { Page } from 'components/layouts/Page/Page';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Loading } from 'components/utils/Loading/Loading';

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

export default function PageBySlug({
  data,
  preview,
}: // eslint-disable-next-line no-use-before-define
InferGetStaticPropsType<typeof getStaticProps>) {
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
        <title>Triton</title>
      </Head>

      {isFallback && <Loading />}

      {!isFallback &&
        (data?.page?._type === 'page' || data?.page?._type === 'homePage') && (
          <Page
            page={data?.page}
            // globals={data?.globals}
            preview={preview}
          />
        )}
    </>
  );
}

export const getStaticProps = async ({ params, preview = false }) => {
  const globals = await getClient(preview).fetch(globalsQuery);

  const { sanityQuery, queryParams } = selectSanityQuery(params.slug);

  const page = overlayDrafts(
    await getClient(preview).fetch(sanityQuery, queryParams)
  );

  return {
    props: {
      data: { page: page?.[0] || null, globals },
      preview,
      revalidate: 60,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
