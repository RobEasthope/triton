import { ReactNode, createElement } from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  as: string;
  className?: string;
  children: ReactNode;
};

export const Box = ({ as = "div", className, children, ...rest }: BoxProps) => {
  if (!children) {
    return null;
  }

  return createElement(
    as,
    {
      className,
      ...rest,
    },
    children
  );
};
