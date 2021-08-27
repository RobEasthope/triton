export default function resolvePreviewUrl(document) {
  if (!process.env.SANITY_STUDIO_PREVIEW_SECRET) {
    console.log('No preview key provided');
  }

  if (!process.env.SANITY_STUDIO_PREVIEW_SITE) {
    console.log('No preview site url provided');
  }

  if (!document.slug.current) {
    console.log('No slug has been provided');
  }

  return `${
    process.env.SANITY_STUDIO_PREVIEW_SITE
  }/api/preview/preview-page?secret=${
    process.env.SANITY_STUDIO_PREVIEW_SECRET
  }&slug=${document.slug.current}`;
}
