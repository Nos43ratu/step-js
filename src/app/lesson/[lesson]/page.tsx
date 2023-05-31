import classNames from "classnames";
import fs from "fs";
import matter from "gray-matter";
import { RenderMd } from "@/entities/render-md";

// export async function generateStaticParams() {
//   const lessons = await fs.promises.readdir(`static/lessons/`);
//
//   const indexes = lessons.filter((lesson) => {
//     const item = fs.readdirSync(`static/lessons/${lesson}`);
//
//     if (item.includes("index.md")) {
//       return lesson;
//     }
//   });
//
//   return indexes.map((lesson) => ({
//     lesson: lesson,
//   }));
// }

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
          "border border-black bg-white flex flex-col p-4",
          "shadow-[12px_12px_0px_0px_rgba(73,109,137,1)]"
        )}
      >
        <RenderMd>{lesson.content}</RenderMd>
      </div>
    </main>
  );
}
