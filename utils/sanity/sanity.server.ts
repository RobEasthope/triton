/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import { HomePage, Page } from 'types/sanity-schema';

import { sanityConfig } from './config';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

interface PageProps extends Page {
  _id: string;
}
interface HomePageProps extends HomePage {
  _id: string;
}

export function overlayDrafts(
  docs: [PageProps | HomePageProps]
): [PageProps | HomePageProps] {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection');
    }

    const isDraft = doc._id.startsWith('drafts.');
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return [...overlayed.values()] as [PageProps | HomePageProps];
}
