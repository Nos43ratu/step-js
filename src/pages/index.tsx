import { LessonList } from "@/features/lesson";

import { Seo } from "@/entities/seo";
import { Header } from "@/entities/header";

import { get_lessons } from "@/shared/api";
import { Layout } from "@/shared/ui";

type HomePageProps = {
  lessons: ParsedMd[];
};

const PAGE_META = {
  title: "STEP - JS course",
} as const;

function HomePage({ lessons }: HomePageProps) {
  return (
    <Layout>
      <Seo meta={PAGE_META} />

      <Header />

      <Layout.Container>
        <LessonList lessons={lessons} />
      </Layout.Container>
    </Layout>
  );
}

async function getServerSideProps(): Promise<{ props: HomePageProps }> {
  const lessons = await get_lessons();

  return {
    props: {
      lessons,
    },
  };
}

export { getServerSideProps };

export default HomePage;
