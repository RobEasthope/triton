import { useRouter } from "next/router";
import { Loading } from "ui-pkg/base/Loading/Loading";
import { NextMetadata } from "components/NextMetadata/NextMetadata";
import { Course, CourseProps } from "ui-pkg/pages/Course/Course";
import { COURSE_SLUG } from "ui-pkg/pages/Course/constants/COURSE_SLUG";
import { sanityAPI } from "apis-pkg/sanity/sanityAPI";
import {
  COURSE_BY_ID_QUERY,
  COURSE_COMPONENT_TYPES_BY_SLUG_QUERY,
  COURSE_SLUGS_QUERY,
} from "ui-pkg/pages/Course/Course.queries";
import { SanityPageByIdQueryProps } from "ui-pkg/types/SanityPageByIdQueryProps";
import { MetadataSettings } from "ui-pkg/types/sanity-schema";

// TYPES
type CourseBySlugProps = CourseProps & {
  fallbacks: MetadataSettings;
};

// MARKUP
export default function CourseRoute({
  page,
  header,
  footer,
  fallbacks,
}: CourseBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  return (
    <>
      <NextMetadata
        title={page?.name}
        description={page?.metadataDescription}
        thumbnail={page?.metadataImage}
        fallbacks={fallbacks}
      />

      {/* Loading spinner */}
      {isFallback && <Loading />}

      {/* Trip page layout */}
      {!isFallback && <Course page={page} header={header} footer={footer} />}
    </>
  );
}

// SSG
export async function getStaticPaths() {
  const slugs: string[] = await sanityAPI.fetch(COURSE_SLUGS_QUERY);

  const paths = slugs.map((slug) => {
    const courseSlugAsArray = slug?.split("/").filter((p) => p);

    return {
      params: { courseSlug: courseSlugAsArray.slice(-1).toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { courseSlug: string } }) {
  // Fetch page id and component types
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    COURSE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug: `${COURSE_SLUG}/${params?.courseSlug}`,
    }
  );

  if (!primer?.id) {
    return { notFound: true };
  }

  // Fetch page data
  const payload: CourseBySlugProps = await sanityAPI.fetch(
    COURSE_BY_ID_QUERY({ id: primer?.id, componentTypes: primer?.componentTypes })
  );

  return {
    props: {
      page: payload?.page || null,
      header: payload?.header || null,
      footer: payload?.footer || null,
      fallbacks: payload?.fallbacks || null,
    },
    // ISR cache time
    revalidate: 60,
  };
}
