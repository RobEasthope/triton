import { PortableTextComponents } from "@portabletext/react";

// MARKUP
export const EmphasisedText: PortableTextComponents = {
  block: { normal: ({ children }) => <span>{children}</span> },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
};
