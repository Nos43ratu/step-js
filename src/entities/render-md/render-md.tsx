import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css";
import Link from "next/link";

type RenderMd = {
  children: string;
};

export function RenderMd({ children }: RenderMd) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl font-medium">{props.children}</h1>
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
        // img: ({ node, ...props }) => {
        //   return (
        //     <Image src={props.src ?? ""} width={500} height={500} alt={""} />
        //   );
        // },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
