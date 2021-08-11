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
  "orgs": rawOrgs[]->,
  "filters": featureFilter[]->,
  "stories": *[_type == "successStoryPage" && i18n == $locale] | order(publicationDate desc),
  "muxVideo": rawMuxVideo.asset->,
}`;

// Global meta data
export const globalsQuery = groq`
  {
    "globalMetadata": *[_type == "globalMetadata"  && i18n == $locale][0],
    "header": *[_type == "header" && i18n == $locale][0]{
  		...,
  		"navLinks": rawNavLinks[]{
        ...,
        "to": internalUID->,
        "navListing": rawNavLinks[]{..., "to": {...internalUID->{...},  }}
      },
  	},
    "footer": *[_type == "footer" && i18n == $locale][0]{
  		...,
  		"navLinks": rawNavLinks[]{
        ...,
        "to": internalUID->,
        "navListing": rawNavLinks[]{..., "to": {...internalUID->{...},  }}
      },
  		"legalNav": rawLegalLinks[]{
        ...,
        "to": internalUID->,
        "navListing": rawNavLinks[]{..., "to": {...internalUID->{...},  }}
      },
  	},
    "prefilledSections": *[_type == "prefilledSections" && i18n == $locale][0]{
      ...,
      "ctaPrefilledLink": rawCtaPrefilledLink[0]{..., "to": {...internalUID->{...,},  }},
    },
    "settings": *[_type == "generalSettings"][0]{
      ...,
      "basei18nCode": rawBaseLang->i18nCode.current
    },
    "error404": *[_type == "error404"]{
      ...
    },
    "features": *[_type == "feature"]{
      ...
    }
  }
`;
export const ssRoutesQuery = groq`
  *[_type == "generalSettings"][0].ssRoute
`;

// Home page
export const error404Query = groq`
  *[_type == "error404"]{
    ...
  }
`;

// Home page
export const homePageQuery = groq`
  *[_type == "homePage" && fullSlug.current == $slug && i18n == $locale][0]{
    ...,
    ${getSections}
  }
`;

// Page
export const pageBySlugQuery = groq`
  *[_type == "page" && fullSlug.current == $slug && i18n == $locale][0]{
     ...,
    ${getSections}
  }
`;

// Success story pages
export const successStoryPageBySlugQuery = groq`
  *[_type == "successStoryPage" && fullSlug.current == $slug && i18n == $locale][0]{
     ...,
    ${getSections}
  }
`;
// Success story pages
export const hubspotFormPageBySlugQuery = groq`
  *[_type == "hubspotFormPage" && fullSlug.current == $slug && i18n == $locale][0]{
     ...
  }
`;

// Search all doc types by slug and locale
export const anyPageBySlugQuery = groq`
  *[_type in ["page", "successStoryPage", "hubspotFormPage", "homePage"] && fullSlug.current == $slug && i18n == $locale]{
     ...,
    ${getSections},
    "features": rawFeatures[]->
  }
`;

// All page slugs
export const pageSlugsQuery = groq`
  *[_type == "page" || _type == "homePage" || _type == "successStoryPage" || _type == "hubspotFormPage" && defined(slug.current)]{
    fullSlug {
      current
    },
    i18n,
    _type
  }
`;
