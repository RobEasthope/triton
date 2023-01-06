// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Links
import InternalLink from "ui-pkg/base/InternalLink/InternalLink.schema";
import InternalLinkWithTitle from "ui-pkg/base/InternalLink/InternalLinkWithTitle.schema";
import ExternalLink from "ui-pkg/base/ExternalLink/ExternalLink.schema";
import ExternalLinkWithTitle from "ui-pkg/base/ExternalLink/ExternalLinkWithTitle.schema";

// Navigation
import LinksList from "ui-pkg/navigation/LinksList/LinksList.schema";
import Announcement from "ui-pkg/navigation/AnnouncementsBar/components/Announcement/Announcement.schema";
import AnnouncementsBar from "ui-pkg/navigation/AnnouncementsBar/AnnouncementsBar.schema";
import Header from "ui-pkg/navigation/Header/Header.schema";
import Footer from "ui-pkg/navigation/Footer/Footer.schema";

// Portable/Prose text
import BasicText from "ui-pkg/base/Prose/components/BasicText/BasicText.schema";
import ArticleText from "ui-pkg/base/Prose/components/ArticleText/ArticleText.schema";

// Settings
import Error404NavCard from "ui-pkg/pages/Error404/components/Error404NavCard/Error404NavCard.schema";
import Error404 from "ui-pkg/pages/Error404/Error404.schema";
import MetadataSettings from "ui-pkg/settings/MetadataSettings.schema";

// Sections

import Image from "ui-pkg/blocks/Image/Image.schema";
import Hero from "ui-pkg/blocks/Hero/Hero.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import TextAndMedia from "ui-pkg/blocks/TextAndMedia/TextAndMedia.schema";
import YoutubeVideo from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema";

// Docs
import CourseType from "ui-pkg/pages/Course/schemas/CourseType.schema";
import Trip from "ui-pkg/pages/Course/schemas/Trip.schema";
import Course from "ui-pkg/pages/Course/Course.schema";
import BlogAuthor from "ui-pkg/pages/BlogPost/schemas/BlogAuthor.schema";
import BlogCategory from "ui-pkg/pages/BlogPost/schemas/BlogCategory.schema";
import BlogPost from "ui-pkg/pages/BlogPost/BlogPost.schema";
import Page from "ui-pkg/pages/Page/Page.schema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Links
    InternalLink,
    InternalLinkWithTitle,
    ExternalLink,
    ExternalLinkWithTitle,
    LinksList,

    // Navigation
    Announcement,
    AnnouncementsBar,
    Header,
    Footer,

    // Settings
    MetadataSettings,

    // Formatted text
    BasicText,
    ArticleText,

    // Content
    Hero,
    Image,
    Spacer,
    Text,
    TextAndMedia,
    YoutubeVideo,

    // Blog
    BlogAuthor,
    BlogCategory,
    BlogPost,

    // Pages
    Error404NavCard,
    Error404,
    Page,
  ]),
});
