import Link from "next/link";
import { SanityReference, Page } from "ui-pkg/types/sanity-schema";
import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";
import { PageProps } from "ui-pkg/pages/Page/Page";
import { CourseProps } from "ui-pkg/pages/Course/Course";
import { ArticleProps } from "ui-pkg/pages/Article/Article";

// Schema props
export type InternalLinkWithTitleSchemaProps = {
  _type: "InternalLinkWithTitle";
  _key: string;
  internalUID: SanityReference<
    PageProps["page"] | CourseProps["page"] | ArticleProps["page"]
  >;
  to?: PageProps["page"] | CourseProps["page"] | ArticleProps["page"];
  title: string;
};

export type InternalLinkSchemaProps = {
  _type: "InternalLinkSansTitle";
  _key: string;
  internalUID: SanityReference<
    PageProps["page"] | CourseProps["page"] | ArticleProps["page"]
  >;
  to?: PageProps["page"] | CourseProps["page"] | ArticleProps["page"];
};

// Component props
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | null;
  className?: string;
  children: any;
};

export const InternalLink = ({
  href,
  children,
  className,
  ...rest
}: InternalLinkProps) => {
  if (!href && !children) {
    return null;
  }

  if (!href) {
    return <span>{children || null}</span>;
  }

  return (
    <Link
      href={href === HOME_PAGE_SLUG ? "/" : `/${href}`}
      className={className}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children || null}
    </Link>
  );
};
