import { GetServerSideProps } from "next";
import { Card } from "@/entities/card";
import { RenderMd } from "@/entities/render-md";
import { Layout } from "@/shared/ui";
import { Seo } from "@/entities/seo";
import { Header } from "@/entities/header";
import { get_lesson } from "@/shared/api/api_server";

type LessonPageProps = {
  lesson: any;
};
const PAGE_META = {
  title: "STEP - JS course",
};

function LessonPage({ lesson }: LessonPageProps) {
  return (
    <Layout>
      <Seo meta={PAGE_META} />

      <Header />

      <Layout.Container>
        <div className="flex flex-col max-w-3xl mx-auto w-full ">
          <Card className="p-4" hover={false}>
            <RenderMd content={lesson.content} />
          </Card>
        </div>
      </Layout.Container>
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
