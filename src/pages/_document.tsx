import { Html, Head, Main, NextScript } from "next/document";
/*{"state":{"theme":"system"},"version":0}*/

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/*<script*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `*/}
        {/*        const storage = localStorage.getItem('theme');*/}
        {/*        if (storage) {*/}
        {/*        try {*/}
        {/*            const theme = JSON.parse(storage).state.theme;*/}

        {/*            if (theme || window.matchMedia('(prefers-color-scheme: dark)').matches) {*/}
        {/*            document.documentElement.classList.add('dark');*/}
        {/*            } else {*/}
        {/*              document.documentElement.classList.remove('dark');*/}
        {/*            }*/}
        {/*        } catch (_) {}*/}
        {/*        }*/}
        {/*      `,*/}
        {/*  }}*/}
        {/*/>*/}
      </Head>

      <body className="font-roboto text-gray-900">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
