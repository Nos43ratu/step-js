import Link from "next/link";

import { RenderMd } from "@/entities/render-md";
import { Card } from "@/entities/card";
import { Wrap } from "@/entities/wrap";

type LessonListProps = {
  lessons: ParsedLesson[];
};

export function LessonList({ lessons }: LessonListProps) {
  return (
    <section className="flex flex-col max-w-3xl mx-auto w-full space-y-5 lg:space-y-8 xl:space-y-12 px-4">
      {lessons.map((lesson, lesson_index) => (
        <Card
          key={lesson_index}
          className="px-4 py-3 lg:px-5 lg:py-4 space-y-2 lg:space-y-3"
          random
        >
          <header className="border-b-2 border-gray-600 pb-2 lg:pb-4">
            <Wrap
              condition={!!lesson.data.link}
              wrapper={
                <Link href={lesson.data.link} className="text-indigo-500" />
              }
            >
              <h2 className="font-bold text-base md:text-2xl">
                {lesson.data.title}
              </h2>
            </Wrap>
          </header>

          <div className="border-b-2 border-gray-600 pb-2 lg:pb-4">
            <RenderMd content={lesson.content}></RenderMd>
          </div>

          <footer className="text-gray-600 text-sm">{lesson.data.date}</footer>
        </Card>
      ))}
    </section>
  );
}
