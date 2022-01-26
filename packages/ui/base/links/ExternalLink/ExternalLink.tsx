import { Page, Home } from 'types/sanity-schema';

// Schema props
export type ExternalLinkWithTitleSchemaProps = {
  _type: 'ExternalLinkWithTitle';
  _key: string;
  title: string;
  to?: Page | Home;
  url: string;
};

export type ExternalLinkSchemaProps = {
  _type: 'ExternalLinkSansTitle';
  _key: string;
  newTab: boolean;
  to?: Page | Home;
  url: string;
};

// Component props
export type ExternalLinkProps = {
  link: ExternalLinkWithTitleSchemaProps | ExternalLinkSchemaProps;
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
