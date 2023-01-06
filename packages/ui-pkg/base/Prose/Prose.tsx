import { PortableText, PortableTextComponents } from "@portabletext/react";

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
};

export const Prose = ({ as = "div", content, components, className }: ProseProps) => {
  if (!content) {
    return null;
  }

  return (
    <div className={`prose ${className || ""}`}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={content}
        components={components as PortableTextComponents}
      />
    </div>
  );
};
