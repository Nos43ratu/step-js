import fs from "fs";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { lesson: string; example: string };
  }
) {
  const example = await fs.promises.readFile(
    `static/lessons/${params.lesson}/${params.example}.html`
  );

  return new Response(example, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
