import S from '@sanity/desk-tool/structure-builder';
import Iframe from 'sanity-plugin-iframe-pane'

import {
  RiHome4Line,
  RiCompasses2Line,
  RiListSettingsLine,
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { FaGlobeEurope } from 'react-icons/fa';
import resolvePreviewUrl from './utils/resolvePreviewUrl';

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
        defaultSize: `mobile`, // default `desktop`
        // Optional: Add a reload button, or reload on new document revisions
        reload: {
          button: true, // default `undefined`
          revision: true, // default `undefined`
        },
      })
      .title('Preview'),
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
  
