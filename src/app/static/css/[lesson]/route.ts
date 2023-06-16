import fs from "fs";

type RequestParams = {
  params: { lesson: string };
};

export async function GET(request: Request, params: RequestParams) {
  const { lesson } = params.params;

  const file = await fs.promises.readFile(`public/assets/${lesson}.css`);

  return new Response(file, {
    status: 200,
    headers: {
      "Content-Type": "text/css",
    },
  });
}
