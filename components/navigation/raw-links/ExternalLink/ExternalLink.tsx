import {
  ExternalLinkSansTitleProp,
  ExternalLinkWithTitleProp,
} from 'types/links';

export type ExternalLinkProps = {
  link: ExternalLinkWithTitleProp | ExternalLinkSansTitleProp;
  className?: string;
  children: unknown;
  onClick?: VoidFunction;
};

export const ExternalLink = ({
  link,
  onClick,
  children,
  className,
}: ExternalLinkProps) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    onClick={onClick}
  >
    {children}
  </a>
);
