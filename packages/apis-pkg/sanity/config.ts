// Disable no-non-null-assertion as it's irrelevant for this bit
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const sanityConfig = {
  dataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET! ||
    process.env.STORYBOOK_SANITY_DATASET ||
    "production",
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ||
    process.env.STORYBOOK_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV !== "production",
  token: process.env.SANITY_API_TOKEN! || process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
};
