import fs from "fs";
import matter from "gray-matter";

export async function getHomework(lesson: string, homework: string) {
  const lesson_raw = await fs.promises.readFile(
    `public/lessons/${lesson}/${homework}.md`
  );

  return matter(lesson_raw);
}
