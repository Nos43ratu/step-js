declare global {
  namespace JSX {
    interface IntrinsicElements {
      "brake-xl": {};
    }
  }

  type MdRawHeading = { depth: number; value: string };

  type MdHeading = {
    depth: number;
    value: string;
    id: string;
  };

  type MdMeta = {
    frontmatter: {
      title: string | null;
      date: string | null;
      link: string | null;
    } | null;
    headings: MdHeading[];
  };

  type ParsedMd = {
    meta: MdMeta;
    content: string;
  };

  type Values<T> = T[keyof T];
}

export {};
