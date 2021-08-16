export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.STORYBOOK_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
  withCredentials: true,
};
