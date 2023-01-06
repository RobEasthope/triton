import { Box } from "ui-pkg/base/Box/Box";
import { Announcement as rawAnnouncementProps } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";

// TYPES
export interface AnnouncementProps extends rawAnnouncementProps {
  link?: ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps;
}

// MARKUP
export const Announcement = ({ text, link }: AnnouncementProps) => {
  if (!Announcement) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {link && (
          <SuperLink link={link}>{text && <Text as="span">{text}</Text>}</SuperLink>
        )}
      </Box>
    </Box>
  );
};

export default Announcement;
