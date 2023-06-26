import clsx from "clsx";
import { Roboto_Mono } from "next/font/google";

import { Header } from "@/entities/header";

import type { PropsWithChildren } from "react";

const robot = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["cyrillic-ext"],
});

export function Layout({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-full bg-grid bg-lg",
        robot.className
      )}
    >
      <Header />

      <main className="flex flex-col">{children}</main>
    </div>
  );
}
