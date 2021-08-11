export const sanityConfig = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.STORYBOOK_SANITY_PROJECT_ID,
  // useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
  withCredentials: true,
};
