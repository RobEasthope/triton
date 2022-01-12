import { groq } from 'next-sanity';

export const getSections = groq`
"sections": sections[]{
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

// 404 page
export const error404Query = groq`
  *[_type == "error404"]{
    ...
  }
`;

// Search all page doc types by slug
export const anyPageBySlugQuery = groq`
  *[_type in ["page", "homePage"] && slug.current == $slug]{
     ...,
    ${getSections},
  }
`;

// All page slugs
export const pageSlugsQuery = groq`
  *[_type == "page" || _type == "homePage" && defined(slug.current)]{
    slug {
      current
    },
  }
`;
