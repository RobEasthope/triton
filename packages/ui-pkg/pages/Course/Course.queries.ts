import groq from "groq";
import { BLOCK_QUERIES } from "ui-pkg/utils/BLOCK_QUERIES";
import { SanityPageByIdQueryProps } from "ui-pkg/types/SanityPageByIdQueryProps";
import { FOOTER_QUERY } from "ui-pkg/navigation/Footer/Footer.query";
import { HEADER_QUERY } from "ui-pkg/navigation/Header/Header.query";
import { METADATA_SETTINGS_QUERY } from "ui-pkg/settings/MetadataSettings.query";

// All course slugs
export const COURSE_SLUGS_QUERY = groq`
  *[_type == "Course" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

// Fetch course id and components types by slug
export const COURSE_COMPONENT_TYPES_BY_SLUG_QUERY = groq`
  *[_type in ["Course"] && !(_id in path("drafts.**")) && slug.current == $slug][0]{
    "id": _id,
    "componentTypes": array::unique(sections[]._type),
  }
`;

// Fetch course data by id
export const COURSE_BY_ID_QUERY = ({
  id,
  componentTypes,
}: SanityPageByIdQueryProps) => groq`*[_id == "${id}"][0]{
  "page": {
    _type,
    name,
    slug,
    "courseType": rawCourseType->name.current,
    courseActive,
    metadataDescription,
    metadataImage,
    "sections": sections[_type in [${componentTypes?.map(
      (type: string) => `"${type}"`
    )}]]{
      ${componentTypes
        .map((type: string) => `_type == "${type}" => ${BLOCK_QUERIES[type]}`)
        .join(",")}
    }
  },
  "header": ${HEADER_QUERY},
  "footer": ${FOOTER_QUERY},
  "fallbacks": ${METADATA_SETTINGS_QUERY},
}`;
