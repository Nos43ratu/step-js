import Head from "next/head";

import type { PageMeta } from "./types";

type SeoProps = {
  meta: PageMeta;
};

export function Seo({ meta }: SeoProps) {
  const { title } = meta;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
