import Link from 'next/link';

export const InternalLink = ({ link }) => (
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
