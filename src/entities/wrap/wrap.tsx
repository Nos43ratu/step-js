import { cloneElement, ReactElement, ReactNode } from "react";

type WrapperProps = {
  condition: boolean;
  wrapper: ReactNode;
  children: ReactNode;
};

export function Wrap({ condition, wrapper, children }: WrapperProps) {
  return condition
    ? cloneElement(wrapper as ReactElement, {}, children)
    : children;
}
