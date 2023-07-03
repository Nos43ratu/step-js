import { GetServerSideProps } from "next";
import { Seo } from "@/entities/seo";
import { Header } from "@/entities/header";
import { Layout } from "@/shared/ui";
import { Card } from "@/entities/card";
import { RenderMd } from "@/entities/render-md";
import { get_lesson_code } from "@/shared/api/api_server";

type CodePageProps = {
  code: ParsedMd;
};

const PAGE_META = {
  title: "STEP - JS course",
};

export function CodePage({ code }: CodePageProps) {
  return (
    <Layout>
      <Seo meta={PAGE_META} />

      <Header />

      <Layout.Container>
        <div className="flex flex-col max-w-3xl mx-auto w-full ">
          <Card className="p-4" hover={false}>
            <RenderMd content={code.content} />
          </Card>
        </div>
      </Layout.Container>
    </Layout>
  );
}

const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.params?.name as string;

  const code = await get_lesson_code(name);

  return {
    props: {
      code,
    },
  };
};

export { getServerSideProps };

export default CodePage;
