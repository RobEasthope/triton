import { PageProps } from '@/UI/pages/Page/Page';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';

export const pageRenderChecks = (props: {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
  currentRoute: string;
}): boolean => {
  const currentRoute: string = props?.currentRoute;
  const pageSlug: string = props?.data?.page?.slug?.current;
  const homePageSlug: string = props?.data?.globals?.settings.homePageSlug;

  // No data
  if (props?.data?.page === null) {
    return false;
  }

  // Don't render homepage if we're no on the root path
  if (currentRoute !== '/' && pageSlug === homePageSlug) {
    return false;
  }

  // Root path and valid home page slug
  if (currentRoute === '/' && pageSlug === homePageSlug) {
    return true;
  }

  // Green light
  return true;
};
