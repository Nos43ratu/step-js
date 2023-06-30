import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { useEffect, useState } from "react";
import CopyIcon from "@/shared/ui/icons/copy.svg";
import { useCodeTheme } from "@/entities/render-md/store";
import { useCopyToClipboard } from "@/shared/hooks/use_copy";

export function Code({
  node,
  className,
  inline,
  children,
  ...props
}: CodeProps) {
  const { style, setTheme } = useCodeTheme();
  const handleCopy = useCopyToClipboard();

  const code_text = String(children).replace(/\n$/, "");

  useEffect(() => {
    setTheme("prism");
  }, []);

  const match = /language-(\w+)/.exec(className || "");

  const lang = {
    js: "javascript",
    html: "html",
    css: "css",
  };

  return (
    <div className="relative overflow-hidden border-2 border-gray-600 group">
      <button
        onClick={() => handleCopy(code_text)}
        className="absolute top-2 right-2 items-center hover:text-cyan-500 hover:border-cyan-500 justify-center bg-white border border-black hidden group-hover:flex w-8 h-8"
      >
        <CopyIcon className="w-6 h-6" />
      </button>

      {!inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={style}
          className="!m-0"
          language={lang[match[1] as keyof typeof lang]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      )}
    </div>
  );
}
