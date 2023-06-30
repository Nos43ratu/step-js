import fs from "fs";

import { parse_md } from "@/shared/lib/parse_md";

export async function get_lessons(): Promise<ParsedMd[]> {
  const lesson_paths = await fs.promises.readdir("public/lessons");

  return Promise.all(
    lesson_paths.map(async (lesson_path) => {
      const lesson_raw_data = await fs.promises.readFile(
        `public/lessons/${lesson_path}/meta.md`
      );

      return parse_md(lesson_raw_data.toString());
    })
  );
}

export async function get_lesson(name: string): Promise<ParsedMd> {
  const lesson_raw_data = await fs.promises.readFile(
    `public/lessons/${name}/index.md`
  );

  return parse_md(lesson_raw_data.toString());
}
