import S from '@sanity/desk-tool/structure-builder';

import {
  RiHome4Line,
  RiGlobeLine,
  RiCompasses2Line,
  RiNavigationFill,
  RiListSettingsLine,
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { FaGlobeEurope } from 'react-icons/fa';

export default () =>
  S.list()
    .id('__root__')
    .title('Triton')
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
        .child(S.documentTypeList('page').title('Pages')),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .icon(RiCompasses2Line)
        .child(
          S.list()
            .title('Navigation')
            .items([
              S.listItem()
                .title('Header')
                .icon(RiNavigationFill)
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
