import { Roboto_Mono } from "next/font/google";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const robot = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["cyrillic-ext"],
});

function Wrapper({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-full bg-grid-light dark:bg-grid-dark bg-lg",
        robot.className
      )}
    >
      {children}
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return <div className="flex flex-col my-28">{children}</div>;
}

export const Layout = Object.assign(Wrapper, { Container });
