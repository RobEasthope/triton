import { Box } from "ui-pkg/base/Box/Box";
import { Details as rawDetailsProps } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";
import { DetailCard } from "./components/DetailCard/DetailCard";

// TYPES
export interface DetailsProps extends rawDetailsProps {
  columns: "1" | "2" | "3" | "4" | "5";
}

// MARKUP
export const Details = ({ heading, description, details, columns }: DetailsProps) => {
  if (!details) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <Text as="h2">{heading}</Text>}

        <Prose as="div" content={description} components={BasicTextComponents} />

        {details.length > 0 && (
          <Box as="div">
            {details.map((block) => (
              <DetailCard heading={block.heading} text={block.text} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Details;
