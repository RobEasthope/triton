import groq from "groq";
import { HEADER_QUERY } from "ui-pkg/navigation/Header/Header.query";
import { FOOTER_QUERY } from "ui-pkg/navigation/Footer/Footer.query";
import { METADATA_SETTINGS_QUERY } from "ui-pkg/settings/MetadataSettings.query";

export const ERROR_404_QUERY = groq`{
  "page": *[_type == "Error404" && !(_id in path("drafts.**"))][0]{
    _type,
    logo,
    heading,
    subheading,
    "cards": rawCards[]{
      heading,
      description,
      "link": {
        "to": internalUID->{slug}
      }
    },
    goBackTitle,
  },
  "header": ${HEADER_QUERY},
  "footer": ${FOOTER_QUERY},
  "fallbacks": ${METADATA_SETTINGS_QUERY},
}`;
