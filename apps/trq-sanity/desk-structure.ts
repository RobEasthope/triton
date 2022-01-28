import S from '@sanity/desk-tool/structure-builder';
import Iframe from 'sanity-plugin-iframe-pane';
import { toPlainText } from 'part:social-preview/utils';
import SocialPreview from 'part:social-preview/component';


import {
  RiHome4Line,
  RiCompasses2Line,
  RiListSettingsLine,
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { FaGlobeEurope } from 'react-icons/fa';
import resolvePreviewUrl from './utils/resolvePreviewUrl';
import { METADATA } from './constants/METADATA';

export const getDefaultDocumentNode = () => {
  // Return all documents with just 1 view: the form
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        // Required: Accepts an async function
        url: (doc) => resolvePreviewUrl(doc),
        // Optional: Set the default size
        defaultSize: `desktop`, // default `desktop`
        // Optional: Add a reload button, or reload on new document revisions
        reload: {
          button: true, // default `undefined`
          revision: true, // default `undefined`
        },
      })
      .title('Preview'),
    S.view.component(SocialPreview({
          // Overwrite prepareFunction to pick the right fields
          prepareFunction: (
            /* this object is the currently active document */
            { metadataTitle, metadataDescription, title, metadataImage, slug } ,
          ) => ({
            title: metadataTitle || title,
            description: metadataDescription || '',
            siteUrl: METADATA.SITE_URL || '',
            ogImage: metadataImage,
            // Used by Google preview to render the full URL
            // Note that this is a string, not an object (slug { current: string })
            slug: slug?.current
          }),
          google: true,
          facebook: true,
          twitter: true,
          linkedin: false,
        })).title('Social & SEO'),
  ])
}

export default () =>
  S.list()
    .id('__root__')
    .title('Triquetra')
    .items([
      S.listItem()
        .title('Home page')
        .icon(RiHome4Line)
        .child(
          S.document()
            .schemaType('Home')
            .documentId('Home')
        ),
      S.listItem()
        .title('Pages')
        .icon(ImNewspaper)
        .schemaType('Page')
        .child(S.documentTypeList('Page').title('Pages')),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .icon(RiCompasses2Line)
        .child(
          S.list()
            .title('Navigation')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Header')
                .child(
                  S.document()
                    .schemaType('Header')
                    .documentId('Header')
                ),
            ])
        ),
        S.divider(),
      S.listItem()
        .title('Settings')
        .icon(RiListSettingsLine)
        .child(
          S.list()
            .title('Site details')
            .items([
              S.listItem()
                .title('Site details')
                .icon(FaGlobeEurope)
                .child(
                  S.document()
                    .schemaType('GlobalMetadata')
                    .documentId('GlobalMetadata')
                ),
            ])
        ),
    ]);
  
