import { IMAGE_QUERY } from "ui-pkg/blocks/Image/Image.query";
import { SPACER_QUERY } from "ui-pkg/blocks/Spacer/Spacer.query";
import { TEXT_QUERY } from "ui-pkg/blocks/Text/Text.query";
import { TEXT_AND_MEDIA_QUERY } from "ui-pkg/blocks/TextAndMedia/TextAndMedia.query";
import { YOUTUBE_VIDEO_QUERY } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.query";

export const BLOCK_QUERIES: Record<string, string> = {
  Image: IMAGE_QUERY,
  Spacer: SPACER_QUERY,
  Text: TEXT_QUERY,
  TextAndMedia: TEXT_AND_MEDIA_QUERY,
  YoutubeVideo: YOUTUBE_VIDEO_QUERY,
};
