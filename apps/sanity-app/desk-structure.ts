import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import {
  RiCompasses2Line,
  RiErrorWarningLine,
  RiQuillPenLine,
  RiUserLine,
  RiFileList2Line,
  RiSettings2Line,
} from "react-icons/ri";
import { AiOutlineTags } from "react-icons/ai";

import resolvePreviewUrl from "./utils/resolvePreviewUrl";
import { DOC_PREVIEWS_GREEN_LIST } from "./constants/DOC_PREVIEWS_GREEN_LIST";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (DOC_PREVIEWS_GREEN_LIST.includes(schemaType)) {
    return S.document().views([
      // Editor
      S.view.form(),

      // Site preview
      S.view
        .component(Iframe)
        .options({
          // Required: Accepts an async function
          url: (doc) => resolvePreviewUrl(doc),
          // Optional: Set the default size
          defaultSize: "desktop", // default `desktop`
          // Optional: Add a reload button, or reload on new document revisions
          reload: {
            button: true, // default `undefined`
            revision: true, // default `undefined`
          },
        })
        .title("Preview"),
    ]);
  }

  // Return all documents with just 1 view: the form
  return S.document().views([
    // Editor
    S.view.form(),
  ]);
};

export default () =>
  S.list()
    .id("__root__")
    .title("Triton")
    .items([
      S.listItem()
        .title("Pages")
        .icon(RiFileList2Line)
        .schemaType("Page")
        .child(S.documentTypeList("Page").title("Pages")),
      S.divider(),
      S.listItem()
        .title("Article posts")
        .icon(RiQuillPenLine)
        .child(
          S.list()
            .title("Article")
            .items([
              S.listItem()
                .title("Article posts")
                .icon(RiQuillPenLine)
                .schemaType("Article")
                .child(S.documentTypeList("Article").title("Article posts")),
              S.divider(),
              S.listItem()
                .title("Article authors")
                .icon(RiUserLine)
                .schemaType("ArticleAuthor")
                .child(S.documentTypeList("ArticleAuthor").title("Article authors")),
              S.listItem()
                .title("Article categories")
                .icon(AiOutlineTags)
                .schemaType("ArticleCategory")
                .child(
                  S.documentTypeList("ArticleCategory")
                    .title("Article categories")
                    .showIcons(false)
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .icon(RiCompasses2Line)
        .child(
          S.list()
            .title("Navigation")
            .showIcons(false)
            .items([
              S.listItem()
                .title("Header")
                .child(
                  S.document().schemaType("Header").documentId("Header").title("Header")
                ),
              S.listItem()
                .title("Footer")
                .child(
                  S.document().schemaType("Footer").documentId("Footer").title("Footer")
                ),
              S.listItem()
                .title("Announcements bar")
                .child(
                  S.document()
                    .schemaType("AnnouncementsBar")
                    .documentId("AnnouncementsBar")
                    .title("Announcements bar")
                ),
            ])
        ),
      S.listItem()
        .title("Settings")
        .icon(RiSettings2Line)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("App settings")
                .icon(RiSettings2Line)
                .child(
                  S.document()
                    .schemaType("MetadataSettings")
                    .documentId("MetadataSettings")
                ),
              S.divider(),
              S.listItem()
                .title("404 page")
                .icon(RiErrorWarningLine)
                .child(S.document().schemaType("Error404").documentId("Error404")),
            ])
        ),
    ]);
