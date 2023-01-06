import groq from "groq";
import { FOOTER_QUERY } from "ui-pkg/navigation/Footer/Footer.query";
import { HEADER_QUERY } from "ui-pkg/navigation/Header/Header.query";
import { METADATA_SETTINGS_QUERY } from "ui-pkg/settings/MetadataSettings.query";

export const BLOG_POST_SLUGS_QUERY = groq`
  *[_type == "BlogPost" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

export const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type== 'BlogPost' && !(_id in path("drafts.**")) && slug.current == $slug][0]{
    "page": {
      ...,
      "author": rawBlogAuthor->name.current,
      "blogCategories": rawBlogCategories[]->name.current,
      text[]{
        ...,
        "testimonial": rawTestimonial->,
        markDefs[]{
          ...,
          _type == "InternalLink" => {
            "page": @.internalUID->
          }
        }
      },
      "estimatedReadingTime": round(length(pt::text(text)) / 5 / 180 )
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
    "fallbacks": ${METADATA_SETTINGS_QUERY},
  }
`;
