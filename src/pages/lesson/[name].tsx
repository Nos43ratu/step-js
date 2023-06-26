import { Layout } from "@/features/layout";
import { get_lesson } from "@/shared/api";
import { GetServerSideProps } from "next";
import { Card } from "@/entities/card";
import { RenderMd } from "@/entities/render-md";

type LessonPageProps = {
  lesson: any;
};

function LessonPage({ lesson }: LessonPageProps) {
  return (
    <Layout>
      <Card
        className="flex flex-col max-w-3xl mx-auto w-full space-y-5 lg:space-y-8 xl:space-y-12 px-4"
        hover={false}
      >
        <RenderMd content={lesson.content} />
      </Card>
    </Layout>
  );
}

const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.params?.name as string;

  const lesson = await get_lesson(name);

  return {
    props: {
      lesson,
    },
  };
};

export { getServerSideProps };

export default LessonPage;
