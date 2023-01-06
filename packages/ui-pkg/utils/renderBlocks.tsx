import dynamic from "next/dynamic";

// Type imports
import { TripCardProps } from "ui-pkg/blocks/TripIndex/components/TripCard/TripCard";
import { ArticleCTAProps } from "ui-pkg/blocks/ArticleCTA/ArticleCTA";
import { ArticleIndexProps } from "ui-pkg/blocks/ArticleIndex/ArticleIndex";
import { CentredCTAProps } from "ui-pkg/blocks/CentredCTA/CentredCTA";
import { CourseIndexProps } from "ui-pkg/blocks/CourseIndex/CourseIndex";
import { CourseHeroProps } from "ui-pkg/blocks/CourseHero/CourseHero";
import { DetailsProps } from "ui-pkg/blocks/Details/Details";
import { GalleryProps } from "ui-pkg/blocks/Gallery/Gallery";
import { HeroProps } from "ui-pkg/blocks/Hero/Hero";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { LandingHeroProps } from "ui-pkg/blocks/LandingHero/LandingHero";
import { MuxVideoProps } from "ui-pkg/blocks/MuxVideo/MuxVideo";
import { ProfilesProps } from "ui-pkg/blocks/Profiles/Profiles";
import { QuestionsProps } from "ui-pkg/blocks/Questions/Questions";
import { QuoteProps } from "ui-pkg/blocks/Quote/Quote";
import { QuotesProps } from "ui-pkg/blocks/Quotes/Quotes";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { TextAndMediaProps } from "ui-pkg/blocks/TextAndMedia/TextAndMedia";
import { VimeoVideoProps } from "ui-pkg/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const ArticleCTA = dynamic(() => import("ui-pkg/blocks/ArticleCTA/ArticleCTA"));
const ArticleIndex = dynamic(() => import("ui-pkg/blocks/ArticleIndex/ArticleIndex"));
const CentredCTA = dynamic(() => import("ui-pkg/blocks/CentredCTA/CentredCTA"));
const CourseHero = dynamic(() => import("ui-pkg/blocks/CourseHero/CourseHero"));
const CourseIndex = dynamic(() => import("ui-pkg/blocks/CourseIndex/CourseIndex"));
const Details = dynamic(() => import("ui-pkg/blocks/Details/Details"));
const Gallery = dynamic(() => import("ui-pkg/blocks/Gallery/Gallery"));
const Hero = dynamic(() => import("ui-pkg/blocks/Hero/Hero"));
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const LandingHero = dynamic(() => import("ui-pkg/blocks/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("ui-pkg/blocks/MuxVideo/MuxVideo"));
const Profiles = dynamic(() => import("ui-pkg/blocks/Profiles/Profiles"));
const Questions = dynamic(() => import("ui-pkg/blocks/Questions/Questions"));
const Quote = dynamic(() => import("ui-pkg/blocks/Quote/Quote"));
const Quotes = dynamic(() => import("ui-pkg/blocks/Quotes/Quotes"));
const Spacer = dynamic(() => import("ui-pkg/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/blocks/Text/Text"));
const TextAndMedia = dynamic(() => import("ui-pkg/blocks/TextAndMedia/TextAndMedia"));
const TripIndex = dynamic(() => import("ui-pkg/blocks/TripIndex/TripIndex"));
const VimeoVideo = dynamic(() => import("ui-pkg/blocks/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

// TYPES
export type RenderBlocksProps = {
  blocks: Record<"_type" | "_key" | string, any>[];
};

// MARKUP
export function renderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return blocks.map((section) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _type } = section;

    switch (_type) {
      case "ArticleCTA":
        return (
          <ArticleCTA
            {...(section as ArticleCTAProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "ArticleIndex":
        return (
          <ArticleIndex
            {...(section as ArticleIndexProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "CentredCTA":
        return (
          <CentredCTA
            {...(section as CentredCTAProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "CourseHero":
        return (
          <CourseHero
            {...(section as CourseHeroProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "CourseIndex":
        return (
          <CourseIndex
            {...(section as CourseIndexProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Details":
        return (
          <Details
            {...(section as DetailsProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Gallery":
        return (
          <Gallery
            {...(section as GalleryProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Hero":
        return (
          <Hero
            {...(section as HeroProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Image":
        return (
          <Image
            {...(section as ImageProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "LandingHero":
        return (
          <LandingHero
            {...(section as LandingHeroProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "MuxVideo":
        return (
          <MuxVideo
            {...(section as MuxVideoProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Profiles":
        return (
          <Profiles
            {...(section as ProfilesProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Questions":
        return (
          <Questions
            {...(section as QuestionsProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Quote":
        return (
          <Quote
            {...(section as QuoteProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Quotes":
        return (
          <Quotes
            {...(section as QuotesProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Spacer":
        return (
          <Spacer
            {...(section as SpacerProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "Text":
        return (
          <Text
            {...(section as TextProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "TextAndMedia":
        return (
          <TextAndMedia
            {...(section as TextAndMediaProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "TripIndex":
        return (
          <TripIndex
            {...(section as TripCardProps)}
            _type={section?._type as "TripIndex"}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "VimeoVideo":
        return (
          <VimeoVideo
            {...(section as VimeoVideoProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      case "YoutubeVideo":
        return (
          <YoutubeVideo
            {...(section as YoutubeVideoProps)}
            key={`render-blocks-${section._key as string}`}
          />
        );

      default:
        return <div key={section?._key as string}>Missing section {section?._type}</div>;
    }
  });
}
