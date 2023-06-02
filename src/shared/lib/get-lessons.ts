import fs from "fs";
import { parseMd } from "@/shared/lib/parse-md";

export async function getLessons() {
  const lesson_paths = await fs.promises.readdir("public/lessons");

  return lesson_paths.map((lesson_path) => {
    const lesson_raw_data = fs.readFileSync(
      `public/lessons/${lesson_path}/meta.md`
    );

    return parseMd<MetaMdData>(lesson_raw_data);
  });
}
