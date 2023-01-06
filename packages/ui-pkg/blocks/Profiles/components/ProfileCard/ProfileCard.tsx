import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Box } from "ui-pkg/base/Box/Box";
import { ProfileCard as rawProfileCardProps } from "ui-pkg/types/sanity-schema";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { Text } from "ui-pkg/base/Text/Text";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";

// TYPES
export type ProfileCardProps = Pick<
  rawProfileCardProps,
  "name" | "description" | "photo"
>;

// MARKUP
export const ProfileCard = ({ name, description, photo }: ProfileCardProps) => {
  if (!name && !description) {
    return null;
  }

  return (
    <Box as="div">
      {photo && (
        <Box as="div">
          <AspectRatio.Root ratio={4 / 3}>
            <Picture asset={photo} alt={name || ""} mode="cover" maxWidth={600} />
          </AspectRatio.Root>
        </Box>
      )}
      {name && <Text as="p">{name}</Text>}
      <Prose as="div" content={description} components={BasicTextComponents} />
    </Box>
  );
};
