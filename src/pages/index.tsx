import { Layout } from "@/features/layout";
import { LessonList } from "@/features/lesson";

import { Seo } from "@/entities/seo";

import { get_lessons } from "@/shared/api";

type HomePageProps = {
  lessons: ParsedLesson[];
};

const PAGE_META = {
  title: "STEP - JS course",
} as const;

function HomePage({ lessons }: HomePageProps) {
  return (
    <Layout>
      <Seo meta={PAGE_META} />

      <LessonList lessons={lessons} />
    </Layout>
  );
}

async function getServerSideProps() {
  const lessons = await get_lessons();

  return {
    props: {
      lessons,
    },
  };
}

export { getServerSideProps };

export default HomePage;
