import classNames from "classnames";
import fs from "fs";
import matter from "gray-matter";
import { RenderMd } from "@/entities/render-md";

async function getLesson(lesson: string) {
  const lesson_raw = await fs.promises.readFile(
    `static/lessons/${lesson}/index.md`
  );

  return matter(lesson_raw);
}

export default async function Page({ params }: { params: { lesson: string } }) {
  const lesson = await getLesson(params.lesson);

  return (
    <main className="flex flex-col w-full h-fit max-w-3xl mx-auto px-4 py-10 space-y-16">
      <div
        className={classNames(
          "border border-black bg-teal-50 flex flex-col p-4",
          "hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-[8px_8px_0px_0px_rgba(73,109,137,1)] shadow-[12px_12px_0px_0px_rgba(73,109,137,1)]"
        )}
      >
        <RenderMd>{lesson.content}</RenderMd>
      </div>
    </main>
  );
}
