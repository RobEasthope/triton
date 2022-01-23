import Link from 'next/link';

type HomeLinkProps = {
  children: unknown;
};

export const HomeLink = ({ children }: HomeLinkProps) => (
  <Link href="/">
    <a>{children}</a>
  </Link>
);
