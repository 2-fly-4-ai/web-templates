// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.clearPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
