import { sanityAPI } from "sanity/sanityAPI";
import { sanityPreviewAPI } from "sanity/sanityPreviewAPI";

export const getClient = (props: { preview: boolean }) => {
  const { preview } = props;

  return preview ? sanityPreviewAPI : sanityAPI;
};
