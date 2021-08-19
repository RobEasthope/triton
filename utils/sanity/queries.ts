import { groq } from 'next-sanity';

const getSections = groq`
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
    "globalMetadata": *[_type == "globalMetadata"][0],
    "header": *[_type == "header"][0]{
  		...,
  		"navLinks": rawNavLinks[]{
        ...,
        "to": internalUID->,
        "navListing": rawNavLinks[]{..., "to": {...internalUID->{...},  }}
      },
  	},
    "settings": *[_type == "generalSettings"][0]{
      ...,
    },
    "error404": *[_type == "error404"]{
      ...
    },
  }
`;

// 404 page
export const error404Query = groq`
  *[_type == "error404"]{
    ...
  }
`;

// Home page
export const homePageQuery = groq`
  *[_type == "homePage" && slug.current == $slug][0]{
    ...,
    ${getSections}
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
