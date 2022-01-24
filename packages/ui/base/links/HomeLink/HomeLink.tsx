import Link from 'next/link';

type HomeLinkProps = {
  children: any;
};

export const HomeLink = ({ children }: HomeLinkProps) => (
  <Link href="/">
    <a>{children}</a>
  </Link>
);
