import type { NextApiResponse, NextApiRequest } from 'next';

// eslint-disable-next-line @typescript-eslint/require-await
export default async function exit(
  res: NextApiResponse,
  req: NextApiRequest
): Promise<void> {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: req?.query?.slug ?? `/` });
}
