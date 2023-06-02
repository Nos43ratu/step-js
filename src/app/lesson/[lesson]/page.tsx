import classNames from "classnames";
import fs from "fs";
import matter from "gray-matter";
import { RenderMd } from "@/entities/render-md";
import { getLesson } from "@/shared/lib";

export default async function Page({ params }: { params: { lesson: string } }) {
  const lesson = await getLesson(params.lesson);

  return (
    <main className="flex flex-col w-full h-fit max-w-3xl mx-auto px-4 py-10 space-y-16">
      <div
        className={classNames(
          "border border-black bg-white flex flex-col p-4",
          "shadow-[12px_12px_0px_0px_rgba(73,109,137,1)]"
        )}
      >
        <RenderMd>{lesson.content}</RenderMd>
      </div>
    </main>
  );
}
