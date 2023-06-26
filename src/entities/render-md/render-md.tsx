import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";

type RenderMdProps = {
  content: string;
};

export function RenderMd({ content }: RenderMdProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
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
        a: ({ node, ...props }) => {
          const target = props.href?.startsWith("/") ? "_self" : "_blank";

          return (
            <Link
              href={props.href ?? ""}
              className="text-indigo-500 hover:text-indigo-700"
              target={target}
              rel="noopener noreferrer"
            >
              {props.children}
            </Link>
          );
        },
        // ul: ({ node, ...props }) => (
        //   <ul className="list-disc ml-4 text-sm md:text-lg">
        //     {props.children}
        //   </ul>
        // ),
        // li: ({ node, ...props }) => <li className="mt-1">{props.children}</li>,
        // code: ({ node, ...props }) => {
        //   const lang = props.className?.replace("language-", "") ?? "";
        //
        //   return (
        //     <div className="relative">
        //       <button className="absolute top-2 right-2">
        //         <svg
        //           aria-hidden="true"
        //           height="16"
        //           viewBox="0 0 16 16"
        //           version="1.1"
        //           width="16"
        //           data-view-component="true"
        //           className="octicon octicon-copy js-clipboard-copy-icon m-2"
        //         >
        //           <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
        //           <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        //         </svg>
        //       </button>
        //
        //       <code {...props}>{props.children}</code>
        //     </div>
        //   );
        // },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
