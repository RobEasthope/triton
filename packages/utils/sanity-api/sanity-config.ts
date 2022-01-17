type sanityConfigProps = {
  projectId: string,
  dataset: string,
  apiVersion: string,
  token: string,
  useCdn: boolean,
  withCredentials: boolean,
}

export const sanityConfig: sanityConfigProps = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  withCredentials: true,
}
