import S from '@sanity/desk-tool/structure-builder';
import { createSuperPane } from 'sanity-super-pane';
import SocialPreview from 'part:social-preview/component'

import {
  RiHome4Line,
  RiGlobeLine,
  RiCompasses2Line,
  RiNavigationFill,
  RiListSettingsLine,
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { FaGlobeEurope } from 'react-icons/fa';

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Add the social preview view only to those schema types that support it
  if (['page', 'homePage'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview()).title('Social & SEO'),
    ])
  }
  return S.document().views([S.view.form()])
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
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('Pages')
        .icon(ImNewspaper)
        .schemaType('page')
        .child(createSuperPane('page', S)),
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
                    .schemaType('header')
                    .documentId('header')
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
                    .schemaType('globalMetadata')
                    .documentId('globalMetadata')
                ),
            ])
        ),
    ]);
