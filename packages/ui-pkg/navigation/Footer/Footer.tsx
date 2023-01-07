import { Footer as rawFooterProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { METADATA_FALLBACK } from "ui-pkg/constants/METADATA";
import { Text } from "ui-pkg/base/Text/Text";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";

// TYPES
export type FooterProps = {
  footer: rawFooterProps & {
    footerNavigation?: [
      ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
    ];
  };
};

// MARKUP
export const Footer = ({ footer }: FooterProps) => {
  if (!footer) {
    return null;
  }
  const timeStamp = new Date();

  return (
    <Box as="footer">
      <Box as="div">
        <Box as="nav">
          <Box as="ul">
            {footer?.footerNavigation?.map((link) => (
              <li key={link?._key}>
                <SuperLink link={link}>{link.title}</SuperLink>
              </li>
            ))}
          </Box>
        </Box>

        <Box as="section">
          <Text as="p">
            © {METADATA_FALLBACK.TITLE} {timeStamp.getFullYear()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
