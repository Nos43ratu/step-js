import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file_name = req.url?.split("/").pop();
  const file_path = `public/static/${file_name}`;

  if (!fs.existsSync(file_path)) {
    res.status(404).send("Not found");
    return;
  }

  const file = fs.readFileSync(file_path, "utf8");

  res.setHeader("Content-Type", "text/css");
  res.send(file);
}
