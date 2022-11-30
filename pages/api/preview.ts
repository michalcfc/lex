import { NextApiRequest, NextApiResponse } from 'next';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

import { prismicClient } from '../../prismicio';

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req)
  const client = prismicClient({ req });
  setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
}
