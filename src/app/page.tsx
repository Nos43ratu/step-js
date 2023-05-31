import fs from "fs";
import matter from "gray-matter";
import classNames from "classnames";
import { RenderMd } from "@/entities/render-md";

async function getLessons() {
  const lesson_paths = await fs.promises.readdir("static/lessons");

  return lesson_paths.map((lesson_path) => {
    const lesson_raw_data = fs.readFileSync(
      `static/lessons/${lesson_path}/meta.md`
    );

    return matter(lesson_raw_data);
  });
}

export default async function Home() {
  const lessons = await getLessons();

  return (
    <main className="flex flex-col w-full h-fit max-w-3xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-bold">Занятия</h1>

      <div className="flex flex-col space-y-8">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className={classNames(
              "border border-black bg-teal-50 flex flex-col p-4",
              "hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-[8px_8px_0px_0px_rgba(73,109,137,1)] shadow-[12px_12px_0px_0px_rgba(73,109,137,1)]"
            )}
          >
            <RenderMd>{lesson.content}</RenderMd>
          </div>
        ))}
      </div>
    </main>
  );
}
