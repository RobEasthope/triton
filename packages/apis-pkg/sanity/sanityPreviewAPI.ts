/* eslint-disable @typescript-eslint/no-non-null-assertion */
import sanityClient from "@sanity/client";

export const sanityPreviewAPI = sanityClient({
  dataset:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET! ||
    process.env.STORYBOOK_SANITY_PROJECT_DATASET ||
    "production",
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ||
    process.env.STORYBOOK_SANITY_PROJECT_ID!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN! || process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
});
