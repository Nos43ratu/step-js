import matter from "gray-matter";

interface ParseResult<Data extends Record<string, string>> {
  data: Data;
  content: string;
}

export function parseMd<Data extends Record<string, string>>(
  content: string | Buffer
): ParseResult<Data> {
  const { data, content: parsed_content } = matter(content);

  return { data, content: parsed_content } as ParseResult<Data>;
}
