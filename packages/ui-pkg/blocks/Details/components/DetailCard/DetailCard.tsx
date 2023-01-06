import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { Text } from "ui-pkg/base/Text/Text";
import { DetailCard as rawDetailCardProps } from "ui-pkg/types/sanity-schema";

// TYPES
export type DetailCardProps = rawDetailCardProps;

// MARKUP
export const DetailCard = ({
  heading,
  text,
}: Pick<DetailCardProps, "heading" | "text">) => {
  if (!heading && !text) {
    return null;
  }

  return (
    <div>
      {heading && <Text as="h2">{heading}</Text>}
      <Prose as="div" content={text} components={BasicTextComponents} />
    </div>
  );
};
