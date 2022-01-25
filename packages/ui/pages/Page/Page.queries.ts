import { groq } from 'next-sanity';

export const anyPageBySlugQuery = groq`
  *[_type in ["Page", "Home"] && slug.current == $slug]{
     ...,
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
    }
  }
`;

export const previewAnyPageByIdQuery = groq`
  *[_type in ["Page", "Home"] && _id == $id]{
     ...,
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
    }
  }
`;

// All page slugs
export const pageSlugsQuery = groq`
  *[_type == "Page" || _type == "Home" && defined(slug.current)]{
    slug {
      current
    },
  }
`;
export const pageIdsQuery = groq`
  *[_type == "Page" || _type == "Home" && defined(slug.current)]{
    _id,
  }
`;
