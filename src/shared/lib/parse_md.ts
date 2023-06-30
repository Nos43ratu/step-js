import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import remarkHeadings from "@vcarl/remark-headings";
import yaml from "yaml";

export async function parse_md(file: string): Promise<ParsedMd> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkExtractFrontmatter, {
      name: "frontmatter",
      yaml: yaml.parse,
      remove: true,
    })
    .use(remarkHeadings);

  const data = await processor.process(file);

  const meta = {
    frontmatter: data.data.frontmatter ?? null,
    headings: format_headings(data.data.headings as MdRawHeading[]),
  };

  return {
    meta,
    content: data.value,
  } as ParsedMd;
}

function format_headings(headings: MdRawHeading[]): MdHeading[] {
  return headings.map((heading) => {
    return {
      ...heading,
      id: parse_heading_id(heading.value),
    };
  });
}

function parse_heading_id(heading: string): string {
  const match = heading.match(/{#([^]+?)}$/);

  if (match) {
    return match[1];
  } else {
    return "";
  }
}
