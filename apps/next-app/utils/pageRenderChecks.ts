import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";
import { PageProps } from "ui-pkg/pages/Page/Page";

export type PageRenderChecksProps = {
  page: PageProps["page"];
  currentRoute: string;
};

// Only use of this function with Page types. It's designed to check for the home page and render the correct page based on the url slug
export const pageRenderChecks = ({
  page,
  currentRoute,
}: PageRenderChecksProps): boolean => {
  const slug: string = page?.slug?.current || "";

  // No page data at all
  if (page === null) {
    return false;
  }

  // Don't render homepage if we're not at the root path
  if (currentRoute !== "/" && slug === HOME_PAGE_SLUG) {
    return false;
  }

  // Render home page if the root path is active and valid home page slug is valid
  if (currentRoute === "/" && slug === HOME_PAGE_SLUG) {
    return true;
  }

  // Green light
  return true;
};
