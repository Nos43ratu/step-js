import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lesson = req.url?.split("/")[2];
  const example = req.url?.split("/")[3];

  if (!lesson || !example) {
    res.status(404).send("Not found");
  }

  const file_path = `public/lessons/${lesson}/${example}.html`;

  if (!fs.existsSync(file_path)) {
    res.status(404).send("Not found");
    return;
  }
  const file = fs.readFileSync(file_path, "utf8");

  res.setHeader("Content-Type", "text/html");
  res.send(file);
  res.status(404).send("Not found");
}
