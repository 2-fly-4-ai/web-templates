import { client } from "@/lib/sanity.client";

client.config({
  token: process.env.SANITY_WRITE_TOKEN,
});

export default async function likeButtonHandler(req: any, res: any) {
  const { _id } = JSON.parse(req.body);
  const data = await client
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error) => console.log(error));

  // res.status(200).json({ likes: data.likes });
}
