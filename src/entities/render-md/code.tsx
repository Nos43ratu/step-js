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
    setTheme("coy");
  }, []);

  const match = /language-(\w+)/.exec(className || "");

  const lang = {
    js: "javascript",
    html: "html",
    css: "css",
  };

  return !inline && match ? (
    <div className="relative overflow-hidden border-2 border-gray-600 group">
      <button
        onClick={() => handleCopy(code_text)}
        className="z-10 cursor-pointer absolute top-2 right-2 items-center hover:text-cyan-500 hover:border-cyan-500 justify-center bg-white border border-black hidden group-hover:flex w-8 h-8"
      >
        <CopyIcon className="w-6 h-6" />
      </button>

      <SyntaxHighlighter
        {...props}
        style={style}
        className="!m-0 !py-2"
        language={lang[match[1] as keyof typeof lang]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code {...props} className="text-indigo-500">
      {children}
    </code>
  );
}
