import dynamic from "next/dynamic";

// Type imports

import { HeroProps } from "ui-pkg/blocks/Hero/Hero";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { TextAndMediaProps } from "ui-pkg/blocks/TextAndMedia/TextAndMedia";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const Hero = dynamic(() => import("ui-pkg/blocks/Hero/Hero"));
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const Spacer = dynamic(() => import("ui-pkg/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/blocks/Text/Text"));
const TextAndMedia = dynamic(() => import("ui-pkg/blocks/TextAndMedia/TextAndMedia"));
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
