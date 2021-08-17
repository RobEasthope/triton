import Link from 'next/link';
import { LinkSansTitleProp, LinkWithTitleProp } from 'types/links';

type SuperLinkProp = {
  link: LinkWithTitleProp | LinkSansTitleProp;
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
        <Link
          href={
            link?.to?.fullSlug?.current === 'root'
              ? '/'
              : `/${link?.to?.fullSlug?.current}`
          }
          locale={link?.to?.i18n}
        >
          <a
            className={className}
            onClick={onClick}
            onKeyDown={onClick}
            role="link"
            tabIndex={0}
          >
            {children}
          </a>
        </Link>
      );

    case 'externalLinkWithTitle':
      return (
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

    default:
      return null;
  }
};
