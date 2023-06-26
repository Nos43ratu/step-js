import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { get_rand_color } from "./lib";
import { colors } from "./constants";

type CardProps = {
  children: ReactNode;
  className?: string;
  random?: boolean;
  color?: keyof typeof colors;
  hover?: boolean;
};

export function Card({
  className = "",
  random = false,
  color = "gray",
  hover = true,
  children,
}: CardProps) {
  const color_class = random ? get_rand_color() : colors[color];

  return (
    <article
      className={twMerge(
        "border-2 border-black dark:bg-black",
        color_class
          .split(" ")
          .slice(0, hover ? 5 : 2)
          .join(" "),
        className
      )}
    >
      {children}
    </article>
  );
}
