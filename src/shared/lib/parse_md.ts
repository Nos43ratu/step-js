import matter from "gray-matter";

export function parse_md<Data extends Record<string, string>>(
  content: string | Buffer
): ParsedMd<Data> {
  const { data, content: parsed_content } = matter(content);

  return { data, content: parsed_content } as ParsedMd<Data>;
}
