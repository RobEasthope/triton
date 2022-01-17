type sanityConfigProps = {
  dataset: string
  projectId: string
  apiVersion: string
  token: string
  useCdn: boolean,
  withCredentials: boolean,
}

export const sanityConfig: sanityConfigProps = {
  dataset: 'production',
  projectId: 'xtxdr2ns',
  apiVersion: '2021-08-19',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  withCredentials: true,
}
