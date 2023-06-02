import classNames from "classnames";

import { RenderMd } from "@/entities/render-md";

type LessonInfoProps = {
  content: string;
};

export function LessonInfo({ content }: LessonInfoProps) {
  return (
    <div
      className={classNames(
        "border border-black bg-teal-50 flex flex-col p-4",
        "hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-[8px_8px_0px_0px_rgba(73,109,137,1)] shadow-[12px_12px_0px_0px_rgba(73,109,137,1)]"
      )}
    >
      <RenderMd>{content}</RenderMd>
    </div>
  );
}
