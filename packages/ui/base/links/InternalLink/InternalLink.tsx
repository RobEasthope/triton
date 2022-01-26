import Link from 'next/link';
import { SanityReference, Page, Home } from '@/UI/types/sanity-schema';

// Schema props
export type InternalLinkWithTitleSchemaProps = {
  _type: 'InternalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  title: string;
  to: Page | Home;
};

export type InternalLinkSchemaProps = {
  _type: 'InternalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<Page | Home>;
  to: Page | Home;
};

// Component props
export type InternalLinkProps = {
  link: InternalLinkWithTitleSchemaProps | InternalLinkSchemaProps;
  className?: string;
  children: any;
  onClick?: VoidFunction;
};

export const InternalLink = ({
  link,
  onClick,
  children,
  className,
}: InternalLinkProps) => (
  <Link
    href={
      link?.to?.slug?.current === 'root' ? '/' : `/${link?.to?.slug?.current}`
    }
  >
    <a
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="link"
      tabIndex={0}
    >
      {children || null}
    </a>
  </Link>
);
