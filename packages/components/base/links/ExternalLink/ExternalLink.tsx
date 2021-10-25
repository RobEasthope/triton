import {
  ExternalLinkProp,
  ExternalLinkWithTitleProp,
} from '@/components/types/links';

export type ExternalLinkProps = {
  link: ExternalLinkWithTitleProp | ExternalLinkProp;
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
