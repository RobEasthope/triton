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
      // S.listItem()
      //   .title('Success stories')
      //   .icon(TiStarburstOutline)
      //   .schemaType('successStoryPage')
      //   .child(
      //     S.documentTypeList('successStoryPage')
      //       .title('Success stories')
      //       .showIcons(false)
      //   ),
      
      // S.divider(),
      // S.listItem()
      //   .title('Navigation')
      //   .icon(RiGlobeLine)
      //   .child(
      //     S.list()
      //       .title('Navigation')
      //       .items([
      //         S.listItem()
      //           .title('Header')
      //           .icon(RiNavigationFill)
      //           .schemaType('header')
      //           .child(
      //             S.documentTypeList('header').title('Headers').showIcons(false)
      //           ),
      //         S.listItem()
      //           .title('Footer')
      //           .icon(RiNavigationLine)
      //           .schemaType('footer')
      //           .child(
      //             S.documentTypeList('footer').title('Footers').showIcons(false)
      //           ),
      //       ])
      //   ),
      // S.divider(),
      // S.listItem()
      //   .title('Settings')
      //   .icon(RiListSettingsLine)
      //   .child(
      //     S.list()
      //       .title('Settings')
      //       .items([
      //         S.listItem()
      //           .title('General')
      //           .icon(RiSettings2Line)
      //           .child(
      //             S.editor()
      //               .id('generalSettings')
      //               .schemaType('generalSettings')
      //               .documentId('generalSettings')
      //           ),
      //         S.listItem()
      //           .title('Global metadata')
      //           .icon(FaGlobeEurope)
      //           .schemaType('globalMetadata')
      //           .child(
      //             S.documentTypeList('globalMetadata').title(
      //               'Global metadata settings'
      //             )
      //           ),
      //         S.listItem()
      //           .title('404 page')
      //           .icon(RiErrorWarningLine)
      //           .child(
      //             S.editor()
      //               .id('error404')
      //               .schemaType('error404')
      //               .documentId('error404')
      //           ),
      //       ])
      //   ),
    ]);
