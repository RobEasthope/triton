import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import SocialPreview from "part:social-preview/component";

import {
  RiCompasses2Line,
  RiErrorWarningLine,
  RiQuillPenLine,
  RiUserLine,
  RiFileList2Line,
  RiTreasureMapLine,
  RiSettings2Line,
} from "react-icons/ri";
import { MdParagliding } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineTags } from "react-icons/ai";
import { VscQuote } from "react-icons/vsc";

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
    .title("Free Flight Academy")
    .items([
      S.listItem()
        .title("Pages")
        .icon(RiFileList2Line)
        .schemaType("Page")
        .child(S.documentTypeList("Page").title("Pages")),
      S.divider(),
      S.listItem()
        .title("Trips")
        .icon(MdParagliding)
        .child(
          S.list()
            .title("Trips")
            .items([
              S.listItem()
                .title("All trips")
                .icon(MdParagliding)
                .schemaType("Trip")
                .child(S.documentTypeList("Trip").title("Trips")),
              S.listItem()
                .title("Trips by course")
                .icon(RiTreasureMapLine)
                .child(
                  S.documentTypeList("Course")
                    .title("Trips by course")
                    .child((courseId) =>
                      S.documentList()
                        .schemaType("Trip")
                        .title("Trips")
                        .filter('_type == "Trip" && rawCourse._ref == $courseId')
                        .params({ courseId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Courses")
        .icon(RiTreasureMapLine)
        .schemaType("Course")
        .child(S.documentTypeList("Course").title("Courses")),
      S.listItem()
        .title("Course types")
        .icon(FaGraduationCap)
        .schemaType("CourseType")
        .child(S.documentTypeList("CourseType").title("Course types").showIcons(false)),
      S.divider(),
      S.listItem()
        .title("Blog posts")
        .icon(RiQuillPenLine)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Blog posts")
                .icon(RiQuillPenLine)
                .schemaType("BlogPost")
                .child(S.documentTypeList("BlogPost").title("Blog posts")),
              S.divider(),
              S.listItem()
                .title("Blog authors")
                .icon(RiUserLine)
                .schemaType("BlogAuthor")
                .child(S.documentTypeList("BlogAuthor").title("Blog authors")),
              S.listItem()
                .title("Blog categories")
                .icon(AiOutlineTags)
                .schemaType("BlogCategory")
                .child(
                  S.documentTypeList("BlogCategory")
                    .title("Blog categories")
                    .showIcons(false)
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .icon(VscQuote)
        .schemaType("Testimonial")
        .child(S.documentTypeList("Testimonial").title("Testimonials").showIcons(false)),
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
