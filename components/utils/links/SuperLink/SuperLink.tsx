import {
  ExternalLinkProp,
  ExternalLinkWithTitleProp,
  InternalLinkProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import { InternalLink } from '../InternalLink/InternalLink';

type SuperLinkProp = {
  link:
    | ExternalLinkProp
    | InternalLinkProp
    | ExternalLinkWithTitleProp
    | InternalLinkWithTitleProp;
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
    case 'internalLinkWithTitle':
      return (
        <InternalLink link={link} className={className} onClick={onClick}>
          {children}
        </InternalLink>
      );

    case 'externalLinkWithTitle':
      return (
        <ExternalLink link={link} className={className} onClick={onClick}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
