import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { get_rand_color } from "./lib";
import { colors } from "./constants";

type CardProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
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
  as = "div",
  children,
}: CardProps): JSX.Element {
  const [rand_color, set_rand_color] = useState("");

  useEffect(() => {
    set_rand_color(get_rand_color());
  }, []);

  const Component = as;

  const color_class = random ? rand_color : colors[color];

  return (
    <Component
      className={twMerge(
        "border-2 border-black dark:bg-black transition-all",
        color_class
          .split(" ")
          .slice(0, hover ? 6 : 3)
          .join(" "),
        className
      )}
    >
      {children}
    </Component>
  );
}
