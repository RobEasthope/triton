import S from '@sanity/desk-tool/structure-builder';

import {
  RiHome4Line,
  RiGlobeLine,
  RiNavigationFill
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';

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
        .icon(RiGlobeLine)
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
    ]);
