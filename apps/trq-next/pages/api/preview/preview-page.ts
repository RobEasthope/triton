import type { NextApiRequest, NextApiResponse } from 'next';
import { previewAnyPageByIdQuery } from '@/UI/pages/Page/Page.queries';
import { previewClient } from '@/UTILS/sanity-api/sanity.server';
import { PageProps } from '@/UI/pages/Page/Page';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check the secret and next parameters
  // This key should only be known to this API route and the CMS
  if (req.query.key !== process.env.SANITY_STUDIO_PREVIEW_KEY) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Get id from request query
  const id = req?.query?.id;

  // Check if the page with the given `slug` exists
  const pageData: PageProps = await previewClient.fetch(
    previewAnyPageByIdQuery,
    {
      id,
    }
  );

  const page: PageProps = pageData;

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'No page data found' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched page
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    Location: `/preview/${id as string}?key=${
      process.env.SANITY_STUDIO_PREVIEW_KEY
    }`,
  });
  res.end();
}
