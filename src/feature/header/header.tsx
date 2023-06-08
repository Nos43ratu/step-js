import { LessonTitle } from "@/entities/lesson/lesson-title";

export function Header() {
  return (
    <header className="shadow-box-lg-indigo-900 hover:shadow-box-base-indigo-900 hover:translate-y-[2px] hover:translate-x-[2px] bg-teal-50 mx-auto border w-full border-black max-w-7xl grid grid-cols-3 mt-4">
      <div className="py-6 px-8 flex">
        <h1 className="text-2xl font-bold">STEP - JS course</h1>
      </div>

      <div className="py-6 px-8 flex">
        <LessonTitle />
      </div>

      <div className="py-6 px-8 flex justify-end">{/*<ToggleTheme />*/}</div>
    </header>
  );
}
