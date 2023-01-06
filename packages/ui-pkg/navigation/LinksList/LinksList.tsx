import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";

// TYPES
export type LinksListProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  _key?: string;
  // key: string | undefined;
  links: Array<ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps>;
};

// MARKUP
export const LinksList = ({ links }: LinksListProps) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul>
      {links?.map((link) => (
        <li key={link?._key}>
          <SuperLink link={link}>{link.title}</SuperLink>
        </li>
      ))}
    </ul>
  );
};
