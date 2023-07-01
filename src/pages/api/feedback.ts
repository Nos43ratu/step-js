import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  await fetch("http://feedback_bot:4000/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((r) => console.log(r.status))
    .catch((e) => console.log(e));

  res.status(200).send("Not found");
}
