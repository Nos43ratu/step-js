import classNames from "classnames";

import { RenderMd } from "@/entities/render-md";

type LessonInfoProps = {
  content: string;
};

export function LessonInfo({ content }: LessonInfoProps) {
  return (
    <div
      className={classNames(
        "border border-black dark:bg-black bg-teal-50 flex flex-col p-4",
        "hover:translate-y-[2px] hover:translate-x-[2px] shadow-box-lg-sky-700 hover:shadow-box-base-sky-700"
      )}
    >
      <RenderMd>{content}</RenderMd>
    </div>
  );
}
