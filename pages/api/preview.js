import * as prismicNext from "@prismicio/next";

import { prismicClient } from "../../prismicio";

export default async function handler(req, res) {
  const client = prismicClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client });
}