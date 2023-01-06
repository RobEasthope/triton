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
import BlogCTA from "ui-pkg/blocks/BlogCTA/BlogCTA.schema";
import BlogIndex from "ui-pkg/blocks/BlogIndex/BlogIndex.schema";
import CentredCTA from "ui-pkg/blocks/CentredCTA/CentredCTA.schema";
import CourseHero from "ui-pkg/blocks/CourseHero/CourseHero.schema";
import CourseIndex from "ui-pkg/blocks/CourseIndex/CourseIndex.schema";
import DetailCard from "ui-pkg/blocks/Details/components/DetailCard/DetailCard.schema";
import Details from "ui-pkg/blocks/Details/Details.schema";
import GalleryImage from "ui-pkg/blocks/Gallery/schemas/GalleryImage.schema";
import Gallery from "ui-pkg/blocks/Gallery/Gallery.schema";
import Image from "ui-pkg/blocks/Image/Image.schema";
import Hero from "ui-pkg/blocks/Hero/Hero.schema";
import LandingHero from "ui-pkg/blocks/LandingHero/LandingHero.schema";
import MuxVideo from "ui-pkg/blocks/MuxVideo/MuxVideo.schema";
import ProfileCard from "ui-pkg/blocks/Profiles/components/ProfileCard/ProfileCard.schema";
import Profiles from "ui-pkg/blocks/Profiles/Profiles.schema";
import QuestionCard from "ui-pkg/blocks/Questions/components/QuestionCard/QuestionCard.schema";
import Questions from "ui-pkg/blocks/Questions/Questions.schema";
import Testimonial from "ui-pkg/blocks/Quote/components/Testimonial/Testimonial.schema";
import Quote from "ui-pkg/blocks/Quote/Quote.schema";
import Quotes from "ui-pkg/blocks/Quotes/Quotes.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import TextAndMedia from "ui-pkg/blocks/TextAndMedia/TextAndMedia.schema";
import TripIndex from "ui-pkg/blocks/TripIndex/TripIndex.schema";
import VimeoVideo from "ui-pkg/blocks/VimeoVideo/VimeoVideo.schema";
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
    BlogCTA,
    BlogIndex,
    CentredCTA,
    CourseHero,
    CourseIndex,
    DetailCard,
    Details,
    GalleryImage,
    Gallery,
    Hero,
    Image,
    LandingHero,
    MuxVideo,
    ProfileCard,
    Profiles,
    QuestionCard,
    Questions,
    Testimonial,
    Quote,
    Quotes,
    Spacer,
    Text,
    TextAndMedia,
    TripIndex,
    VimeoVideo,
    YoutubeVideo,

    // Course
    Trip,
    CourseType,
    Course,

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
