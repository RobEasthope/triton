import { ExternalLinkProp, ExternalLinkWithTitleProp } from '@/UI/types/links';

export type ExternalLinkProps = {
  link: ExternalLinkWithTitleProp | ExternalLinkProp;
  className?: string;
  children: any;
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
    {children || null}
  </a>
);
