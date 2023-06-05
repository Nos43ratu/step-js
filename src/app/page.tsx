import { LessonInfo } from "@/entities/lesson";
import { getLessons } from "@/shared/lib/get-lessons";

export default async function Home() {
  const lessons = await getLessons();

  return (
    <main className="flex flex-col w-full h-fit max-w-3xl mx-auto px-4 py-10 space-y-16">
      <div className="flex flex-col space-y-8">
        {lessons.map((lesson, i) => (
          <LessonInfo key={i} content={lesson.content} />
        ))}
      </div>
    </main>
  );
}
