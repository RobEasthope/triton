import { PortableTextComponents } from "@portabletext/react";

// MARKUP
export const QuoteText: PortableTextComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};
