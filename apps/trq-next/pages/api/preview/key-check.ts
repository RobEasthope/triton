import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = req?.query?.key as string;

  const isKeyValid = key === process.env.SANITY_STUDIO_PREVIEW_SECRET;

  res.status(200).json(isKeyValid);
}
