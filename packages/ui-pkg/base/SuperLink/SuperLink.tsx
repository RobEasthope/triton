import {
  ExternalLink,
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/ExternalLink/ExternalLink";
import {
  InternalLink,
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/InternalLink/InternalLink";

export type SuperLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  link:
    | ExternalLinkSchemaProps
    | InternalLinkSchemaProps
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps;
  className?: string;
  children: unknown;
};

export const SuperLink = ({ link, className, children, ...rest }: SuperLinkProps) => {
  if (!link && !children) {
    return null;
  }

  switch (link?._type) {
    case "InternalLinkWithTitle":
      return (
        <InternalLink
          href={link?.to?.slug?.current || null}
          className={className}
          {...rest}
        >
          {children}
        </InternalLink>
      );

    case "ExternalLinkWithTitle":
      return (
        <ExternalLink href={link?.url} className={className} {...rest}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
