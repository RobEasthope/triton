import { groq } from 'next-sanity';

// Global meta data
export const globalsQuery = groq`
  {
    "header": *[_type== 'Header'][0]{
      logo,
      "navigation": rawNavigation[]{
        _key,
        _type,
        title,
        url,
        "to": internalUID->{slug},
      },
    },
    "metadata": *[_type== 'globalMetadata'][0]{
      ...
    }
  }
`;
