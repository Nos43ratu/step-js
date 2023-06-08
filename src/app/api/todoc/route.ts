// import fs from "fs";
// import { unified } from "unified";
// import markdown from "remark-parse";
// import docx from "remark-docx";
// import { remark } from "remark";
// import codeScreenshot from "remark-code-screenshot";

type RequestParams = {
  params: { lesson: string; example: string };
};
//
// const processor = unified().use(markdown).use(docx, { output: "buffer" });
//
// const text = "# hello world";
//
// async function asd() {
//   const file = fs.readFileSync("public/lessons/06-classes/home.md");
//
//   const doc = await processor.process(file);
//   const buffer = await doc.result;
//   fs.writeFileSync("public/example.docx", buffer);
// }
//
// const markdownInput = [
//   `
//    \`\`\`
//    import remark from 'remark'
// import codeScreenshot from 'remark-code-screenshot'
//
// const markdownInput = \\"\\"
//
// remark().use(codeScreenshot)
//     .process(markdownInput, function (err, output) {
//         console.log(output)
//     })
//     \`\`\`
//     `,
// ];

export async function GET(request: Request, params: RequestParams) {
  return new Response("<h1>asd</h1>", {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
