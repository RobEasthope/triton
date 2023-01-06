import Link from "next/link";
import { Course, Footer as rawFooterProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { Picture } from "ui-pkg/base/Picture/Picture";
import { METADATA_FALLBACK } from "ui-pkg/constants/METADATA";
import { LinksList, LinksListProps } from "ui-pkg/navigation/LinksList/LinksList";
import { STATIC_TEXT } from "ui-pkg/constants/STATIC_TEXT";
import { Text } from "ui-pkg/base/Text/Text";
import {
  ExternalLink,
  ExternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";
import { FooterCourseList } from "./components/FooterCourseList/FooterCourseList";

// TYPES
export type FooterProps = {
  footer: rawFooterProps & {
    footerNavigation?: LinksListProps[];
    legalNavigation?: [
      ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
    ];
    activeCourses?: Course[];
    showCourseList: boolean;
  };
};

// MARKUP
export const Footer = ({ footer }: FooterProps) => {
  if (!footer) {
    return null;
  }
  const timeStamp = new Date();

  return (
    <Box as="footer">
      <Box as="div">
        <Box as="nav">
          <div>
            {footer?.logo && (
              <Box as="span">
                <Link href="/">
                  <Picture
                    asset={footer?.logo}
                    alt={METADATA_FALLBACK.TITLE}
                    mode="responsive"
                    maxWidth={160}
                  />
                </Link>
              </Box>
            )}

            <Box as="ul">
              {footer?.legalNavigation?.map((link) => (
                <li key={link?._key}>
                  <SuperLink link={link}>{link.title}</SuperLink>
                </li>
              ))}
            </Box>
          </div>

          <Box as="ul">
            {footer?.footerNavigation?.map((list) => (
              <LinksList key={list?._key} links={list?.links} />
            ))}

            {footer?.showCourseList && (
              <FooterCourseList
                heading={STATIC_TEXT.FOOTER_TRIP_LIST_HEADING}
                courses={footer?.activeCourses || null}
              />
            )}
          </Box>

          <ExternalLink href={footer?.bhpaLink || null}>
            <Picture
              asset={footer?.bhpaLogo}
              alt="BHPA"
              mode="responsive"
              maxWidth={64}
            />
          </ExternalLink>
        </Box>

        <Box as="section">
          <Text as="p">
            © {METADATA_FALLBACK.TITLE} {timeStamp.getFullYear()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
