/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';

type HomeLinkProps = {
  className?: string;
  onClick?: VoidFunction;
  children: unknown;
};

export const HomeLink = ({ className, onClick, children }: HomeLinkProps) => (
  <Link href="/">
    <a role="button" tabIndex={0} className={className} onClick={onClick}>
      {children}
    </a>
  </Link>
);
