import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Home, HomeProps } from '@/UI/pages/Home/Home';
import { Loading } from '@/UI/base/app/Loading/Loading';
import {
  previewAnyPageByIdQuery,
  pageIdsQuery,
} from '@/UI/pages/Page/Page.queries';
import { globalsQuery } from '@/TRQ/sanity-api/queries';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/UTILS/sanity-api/sanity.server';
import { GlobalMetadata } from '@/UI/types/sanity-schema';
import { HeaderProps } from '@/UI/navigation/Header/Header';

type PreviewPageBySlugProps = {
  data: {
    page: PageProps | HomeProps;
    globals: { header: HeaderProps; metadata: GlobalMetadata };
  };
};

export default function PageBySlug({ data }: PreviewPageBySlugProps) {
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

export async function getStaticPaths() {
  const pages = (await sanityClient.fetch(pageIdsQuery)) as [
    PageProps | HomeProps
  ];

  return {
    paths: pages.map((page) => `/${page?._id}`),
    fallback: true,
  };
}

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { id: string[] };
  preview: boolean;
}) => {
  const globals: GlobalMetadata = await getClient(preview).fetch(globalsQuery);

  // const { sanityQuery, queryParams } = selectSanityQuery(params?.slug);

  const page = overlayDrafts(
    await getClient(preview).fetch(previewAnyPageByIdQuery, {
      id: params?.id[0],
    })
  );

  return {
    props: {
      data: { page: (page[0] as PageProps | HomeProps) || null, globals },
      preview,
    },
    revalidate: 60,
  };
};
