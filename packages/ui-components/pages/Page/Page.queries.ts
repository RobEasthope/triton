import { groq } from 'next-sanity';

export const anyPageBySlugQuery = groq`
  *[_type in ["page", "homePage"] && slug.current == $slug]{
     ...,
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
    }
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
