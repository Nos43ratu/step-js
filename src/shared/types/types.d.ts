declare global {
  type ParsedMd<TData> = {
    data: TData;
    content: string;
  };

  type LessonMeta = { title: string; date: string; link: string };

  type ParsedLesson = ParsedMd<LessonMeta>;
}

export {};
