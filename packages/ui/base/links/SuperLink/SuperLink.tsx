import {
  ExternalLink,
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from '@/UI/base/links/ExternalLink/ExternalLink';
import {
  InternalLink,
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from '@/UI/base/links/InternalLink/InternalLink';

type SuperLinkProp = {
  link:
    | ExternalLinkSchemaProps
    | InternalLinkSchemaProps
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps;
  className?: string;
  children: unknown;
  onClick?: VoidFunction;
};

export const SuperLink = ({
  link,
  className,
  children,
  onClick,
}: SuperLinkProp) => {
  switch (link._type) {
    case 'InternalLinkWithTitle':
      return (
        <InternalLink link={link} className={className} onClick={onClick}>
          {children}
        </InternalLink>
      );

    case 'ExternalLinkWithTitle':
      return (
        <ExternalLink link={link} className={className} onClick={onClick}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
