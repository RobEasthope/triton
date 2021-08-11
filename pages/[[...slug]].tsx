/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  anyPageBySlugQuery,
  globalsQuery,
  pageSlugsQuery,
} from 'sanity/queries';

import Custom404 from 'pages/404';
import { PageLayout } from 'components/layouts/PageLayout/PageLayout';
import { selectSanityQuery } from 'helpers/sanity/selectSanityQuery';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { METADATA } from 'constants/metadata';
import { SuccessStoryLayout } from 'components/layouts/SuccessStoryLayout/SuccessStoryLayout';
import { Loading } from 'components/util/Loading/Loading';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { usePreviewSubscription } from 'sanity/sanity-utils';
import { HubspotFormLayout } from 'components/layouts/HubspotFormLayout/HubspotFormLayout';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '../sanity/sanity.server';

export default function PageBySlug({
  data,
  locale,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { isFallback } = router;

  const {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    data: { page },
  } = usePreviewSubscription(anyPageBySlugQuery, {
    params: { slug: data?.page?.fullSlug },
    initialData: data,
    // enabled: preview && slug,
  });

  if (data.page === null) {
    return (
      <Custom404 data={{ page: data?.globals.error404[0] }} locale={locale} />
    );
  }

  return (
    <>
      <Head>
        <title>{METADATA.TITLE_FALLBACK}</title>
      </Head>

      {isFallback && <Loading />}

      {!isFallback &&
        (data?.page?._type === 'page' || data?.page?._type === 'homePage') && (
          <PageLayout
            page={data?.page}
            globals={data?.globals}
            locale={locale}
            preview={preview}
          />
      )}

      {!isFallback && data?.page?._type === 'successStoryPage' && (
        <SuccessStoryLayout
          page={data?.page}
          globals={data?.globals}
          locale={locale}
          preview={preview}
        />
      )}

      {!isFallback && data?.page?._type === 'hubspotFormPage' && (
        <HubspotFormLayout
          page={data?.page}
          globals={data?.globals}
          preview={preview}
        />
      )}
    </>
  );
}

export const getStaticProps = async ({
  params,
  locale,
  locales,
  preview = false,
}) => {
  const globals = await getClient(preview).fetch(globalsQuery, { locale });

  const { sanityQuery, queryParams } = selectSanityQuery(params.slug, locale);

  // const page = await getClient(preview).fetch(sanityQuery, queryParams);

  const page = overlayDrafts(
    await getClient(preview).fetch(sanityQuery, queryParams)
  );

  return {
    props: {
      // eslint-disable-next-line unicorn/no-null
      data: { page: page?.[0] || null, globals },
      locale,
      locales,
      preview,
      revalidate: 60,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];

  const pages = await sanityClient.fetch(pageSlugsQuery);

  for (const page of pages) {
    const fullSlug = page?.fullSlug?.current as string;
    const locale = (page.i18n as string) || (page.locale as string);

    paths.push({
      params: { slug: fullSlug?.split('/').filter((p) => p) },
      locale,
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};
