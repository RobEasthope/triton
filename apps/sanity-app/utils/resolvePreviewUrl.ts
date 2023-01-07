/* eslint-disable no-console */
import { DOC_PREVIEWS_GREEN_LIST } from "sanity-app/constants/DOC_PREVIEWS_GREEN_LIST";

type ResolvePreviewUrlProps = {
  _id: string;
  _type: string;
};

export default function resolvePreviewUrl(document: ResolvePreviewUrlProps) {
  // Check for valid preview key
  if (!process.env.SANITY_STUDIO_PREVIEW_KEY) {
    console.error("No preview key provided");

    return null;
  }

  // Check for site preview url
  if (!process.env.SANITY_STUDIO_PREVIEW_SITE) {
    console.error("No preview site url provided");

    return null;
  }

  if (!document._id) {
    console.error("No page ID has been provided");

    return null;
  }

  // Check that doc type is allowed to be previewed
  if (!DOC_PREVIEWS_GREEN_LIST.includes(document?._type)) {
    console.error("Doc not approved for previewing");

    return null;
  }

  return `${process.env.SANITY_STUDIO_PREVIEW_SITE}/preview/${
    document._type.charAt(0).toUpperCase() + document._type.slice(1)
  }/${document._id}?key=${process.env.SANITY_STUDIO_PREVIEW_KEY}`;
}
