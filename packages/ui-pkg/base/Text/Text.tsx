import { ReactNode, createElement } from "react";

export type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  as: // All valid HTML text elements
  | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "dt"
    | "dd"
    | "span"
    | "small"
    | "div"
    | "figcaption"
    | "q"
    | "li";
  className?: string;
  children: ReactNode;
};

export const Text = ({ as = "p", className, children, ...rest }: TextProps) => {
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
