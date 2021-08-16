import {
  RiHome4Line,
} from 'react-icons/ri';

import { ImNewspaper } from 'react-icons/im';
import S from '@sanity/desk-tool/structure-builder';

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
      // S.divider(),
    ]);
