import Link from "next/link";
import { useState } from "react";
import { Header as rawHeaderProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { METADATA_FALLBACK } from "ui-pkg/constants/METADATA";
import { SmallNavigation } from "ui-pkg/navigation/SmallNavigation/SmallNavigation";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import Headroom from "react-headroom";

// TYPES
export type HeaderProps = {
  header: rawHeaderProps & {
    primaryNavigation?: [
      ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
    ];
    secondaryNavigation?: [
      ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
    ];
  };
};

// MARKUP
export const Header = ({ header }: HeaderProps) => {
  if (!header) {
    return null;
  }

  return (
    <Box as="header">
      <Box as="div">
        <Box as="nav">
          <Box as="div">
            <Box as="span">
              <Link href="/">{METADATA_FALLBACK.TITLE}</Link>
            </Box>

            <Box as="ul">
              {header?.primaryNavigation?.map((nav) => (
                <li key={nav?._key}>
                  <SuperLink link={nav}>{nav.title}</SuperLink>
                </li>
              ))}
            </Box>

            <SmallNavigation
              primaryNavigation={header?.primaryNavigation}
              secondaryNavigation={header?.secondaryNavigation}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
