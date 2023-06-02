import { getLessons } from "@/shared/lib/get-lessons";
import { LessonInfo } from "@/entities/lesson/lesson-info";

export default async function Home() {
  const lessons = await getLessons();

  return (
    <main className="flex flex-col w-full h-fit max-w-3xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-bold">Занятия</h1>

      <div className="flex flex-col space-y-8">
        {lessons.map((lesson, i) => (
          <LessonInfo content={lesson.content} key={i} />
        ))}
      </div>
    </main>
  );
}
