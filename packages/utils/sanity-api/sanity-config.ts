/* eslint-disable @typescript-eslint/no-non-null-assertion */
type SanityConfigProps = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token: string;
  useCdn: boolean;
  withCredentials: boolean;
};

export const sanityConfig: SanityConfigProps = {
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ||
    process.env.STORYBOOK_SANITY_PROJECT_ID!,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET! ||
    process.env.STORYBOOK_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
  withCredentials: true,
};
