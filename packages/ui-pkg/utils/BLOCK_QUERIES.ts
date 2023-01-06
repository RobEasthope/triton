import { BLOG_CTA_QUERY } from "ui-pkg/blocks/BlogCTA/BlogCTA.query";
import { BLOG_INDEX_QUERY } from "ui-pkg/blocks/BlogIndex/BlogIndex.query";
import { CENTRED_CTA_QUERY } from "ui-pkg/blocks/CentredCTA/CentredCTA.query";
import { COURSE_INDEX_QUERY } from "ui-pkg/blocks/CourseIndex/CourseIndex.query";
import { DETAILS_QUERY } from "ui-pkg/blocks/Details/Details.query";
import { GALLERY_QUERY } from "ui-pkg/blocks/Gallery/Gallery.query";
import { HERO_QUERY } from "ui-pkg/blocks/Hero/Hero.query";
import { IMAGE_QUERY } from "ui-pkg/blocks/Image/Image.query";
import { LANDING_HERO_QUERY } from "ui-pkg/blocks/LandingHero/LandingHero.query";
import { MUX_VIDEO_QUERY } from "ui-pkg/blocks/MuxVideo/MuxVideo.query";
import { PROFILES_QUERY } from "ui-pkg/blocks/Profiles/Profiles.query";
import { QUESTIONS_QUERY } from "ui-pkg/blocks/Questions/Questions.query";
import { QUOTE_QUERY } from "ui-pkg/blocks/Quote/Quote.query";
import { QUOTES_QUERY } from "ui-pkg/blocks/Quotes/Quotes.query";
import { SPACER_QUERY } from "ui-pkg/blocks/Spacer/Spacer.query";
import { TEXT_QUERY } from "ui-pkg/blocks/Text/Text.query";
import { TEXT_AND_MEDIA_QUERY } from "ui-pkg/blocks/TextAndMedia/TextAndMedia.query";
import { TRIP_INDEX_QUERY } from "ui-pkg/blocks/TripIndex/TripIndex.query";
import { VIMEO_VIDEO_QUERY } from "ui-pkg/blocks/VimeoVideo/VimeoVideo.query";
import { YOUTUBE_VIDEO_QUERY } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.query";

export const BLOCK_QUERIES: Record<string, string> = {
  BlogCTA: BLOG_CTA_QUERY,
  BlogIndex: BLOG_INDEX_QUERY,
  CentredCTA: CENTRED_CTA_QUERY,
  CourseIndex: COURSE_INDEX_QUERY,
  Details: DETAILS_QUERY,
  Gallery: GALLERY_QUERY,
  Hero: HERO_QUERY,
  Image: IMAGE_QUERY,
  LandingHero: LANDING_HERO_QUERY,
  MuxVideo: MUX_VIDEO_QUERY,
  Profiles: PROFILES_QUERY,
  Questions: QUESTIONS_QUERY,
  Quote: QUOTE_QUERY,
  Quotes: QUOTES_QUERY,
  Spacer: SPACER_QUERY,
  Text: TEXT_QUERY,
  TextAndMedia: TEXT_AND_MEDIA_QUERY,
  TripIndex: TRIP_INDEX_QUERY,
  VimeoVideo: VIMEO_VIDEO_QUERY,
  YoutubeVideo: YOUTUBE_VIDEO_QUERY,
};
