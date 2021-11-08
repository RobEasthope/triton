import type { NextApiRequest, NextApiResponse } from 'next';
import { anyPageBySlugQuery } from '@/utils/sanity/queries';
import { previewClient } from '@/utils/sanity/sanity.server';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  // const { sanityQuery, queryParams } = selectSanityQuery(params.slug, locale);
  // Check if the page with the given `slug` exists
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const pageData = await previewClient.fetch(anyPageBySlugQuery, {
    slug: req.query.slug,
    locale: req.query.locale,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const page = pageData[0];

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'No page data found' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched page
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
    Location: `/${page?.slug?.current}`,
  });
  res.end();
}
