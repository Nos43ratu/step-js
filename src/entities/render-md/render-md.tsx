import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "highlight.js/styles/github.css";
import rehypeRaw from "rehype-raw";
import remarkHeadingId from "remark-custom-heading-id";
import remarkBreaks from "remark-breaks";
import { Code } from "@/entities/render-md/code";

type RenderMdProps = {
  content: string;
};

export function RenderMd({ content }: RenderMdProps) {
  return (
    <ReactMarkdown
      className="flex flex-col space-y-1"
      remarkPlugins={[remarkHeadingId, remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl mb-4 font-bold border-b-2 border-gray-600 pb-2 lg:pb-2">
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl mb-4 font-bold border-b-2 border-gray-600 pb-2 lg:pb-2">
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl mb-4 font-bold border-b-2 border-gray-600 pb-2 lg:pb-2">
            {props.children}
          </h3>
        ),
        p: ({ node, ...props }) => (
          <p className="text-lg mb-4 ">{props.children}</p>
        ),
        a: ({ node, ...props }) => {
          const target = props.href?.startsWith("/") ? "_self" : "_blank";

          return (
            <Link
              href={props.href ?? ""}
              className="text-cyan-500 hover:text-cyan-700"
              target={target}
              rel="noopener noreferrer"
            >
              {props.children}
            </Link>
          );
        },
        ul: ({ node, ...props }) => (
          <ul className="list-disc ml-6 text-sm md:text-lg">
            {props.children}
          </ul>
        ),
        "brake-xl": ({ node, ...props }) => (
          <>
            {new Array(20).fill(null).map((_, i) => (
              <br key={i} />
            ))}
          </>
        ),
        li: ({ node, ...props }) => <li className="mt-1">{props.children}</li>,
        code: Code,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
