import { groq } from 'next-sanity';

export const getSections = groq`
"sections": rawSections[]{
  ...,
  "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
  "bkg": rawBkg->,
  "cards": rawCards[]{
    ...,
    "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
    "bkg": rawBkg->,
  },
  "muxVideo": rawMuxVideo.asset->,
}`;

// Global meta data
export const globalsQuery = groq`
  {
    "header": *[_type== 'header'][0]{
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
