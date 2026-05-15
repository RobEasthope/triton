/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { PortableTextComponents } from "@portabletext/react";
import { Text } from "ui-pkg/base/Text/Text";
import { InternalLink } from "ui-pkg/base/InternalLink/InternalLink";
import { ExternalLink } from "ui-pkg/base/ExternalLink/ExternalLink";

// MARKUP
export const BasicTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <Text as="h2">{children}</Text>,
    h3: ({ children }) => <Text as="h3">{children}</Text>,
    h4: ({ children }) => <Text as="h4">{children}</Text>,
  },
  marks: {
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url}>{children}</ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink href={value?.page?.slug?.current}>{children}</InternalLink>
    ),
  },
};
