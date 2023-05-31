import classNames from "classnames";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "STEP - JS course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames(
          roboto.className,
          "flex w-full h-full bg-grid bg-lg font-roboto"
        )}
      >
        {children}
      </body>
    </html>
  );
}
