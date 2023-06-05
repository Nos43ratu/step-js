import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";

type RenderMd = {
  children: string;
};

export function RenderMd({ children }: RenderMd) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl mb-4 font-bold">{props.children}</h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl mb-4 font-bold">{props.children}</h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl mb-4 font-bold">{props.children}</h3>
        ),
        p: ({ node, ...props }) => (
          <p className="text-xl mb-4 ">{props.children}</p>
        ),
        a: ({ node, ...props }) => (
          <Link
            href={props.href ?? ""}
            className="text-indigo-500 hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.children}
          </Link>
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc ml-4 space-y-1 text-lg">{props.children}</ul>
        ),
        li: ({ node, ...props }) => <li>{props.children}</li>,
        br: ({ node, ...props }) => (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
