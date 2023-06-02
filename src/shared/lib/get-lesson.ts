import fs from "fs";
import { parseMd } from "@/shared/lib/parse-md";

export async function getLesson(lesson: string) {
  const lesson_raw = await fs.promises.readFile(
    `public/lessons/${lesson}/index.md`
  );

  return parseMd<MetaMdData>(lesson_raw);
}
