import groq from "groq";

export const FOOTER_QUERY = groq`
  *[_type== 'Footer' && !(_id in path("drafts.**")) && !(_id in path("drafts.**"))][0]{
    logo,
    bhpaLogo,
    bhpaLink,
    "footerNavigation": rawFooterNavigation[]{
      ...,
      "links": rawLinks[]{
        _type,
        _key,
        title,
        url,
        "to": internalUID->{slug},
      }
    },
    "legalNavigation": rawLegalNavigation[]{
      _type,
      _key,
      title,
      url,
      "to": internalUID->{slug},
    },
    "activeCourses": *[_type== 'Course' && courseActive == true]{
      name,
      slug,
    },
    showCourseList
  }
`;