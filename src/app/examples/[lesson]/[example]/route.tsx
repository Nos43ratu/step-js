import fs from "fs";

type RequestParams = {
  params: { lesson: string; example: string };
};

export async function GET(request: Request, params: RequestParams) {
  const { lesson, example } = params.params;

  try {
    const example_file = await fs.promises.readFile(
      `public/lessons/${lesson}/${example}.html`
    );

    return new Response(example_file, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (e) {
    return new Response("<h1>Example not found</h1>", {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}
