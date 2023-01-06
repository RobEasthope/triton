import { Box } from "ui-pkg/base/Box/Box";
import { Profiles as rawProfilesProps } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

// TYPES
export interface ProfilesProps extends rawProfilesProps {
  columns: 2 | 3;
}

// MARKUP
export const Profiles = ({ heading, profiles, columns }: ProfilesProps) => {
  if (!profiles) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <Text as="h2">{heading}</Text>}

        {profiles.length > 0 && (
          <Box as="div">
            {profiles.map((block) => (
              <ProfileCard
                key={block?._id}
                name={block.name}
                description={block.description}
                photo={block.photo}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profiles;
