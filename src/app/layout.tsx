import classNames from "classnames";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
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
          inter.className,
          "flex w-full h-full bg-grid bg-lg font-inter"
        )}
      >
        {children}
      </body>
    </html>
  );
}
