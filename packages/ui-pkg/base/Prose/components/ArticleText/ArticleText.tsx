/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from "next/dynamic";
import { PortableTextComponents } from "@portabletext/react";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";
import { Text } from "ui-pkg/base/Text/Text";
import { InternalLink } from "ui-pkg/base/InternalLink/InternalLink";
import { ExternalLink } from "ui-pkg/base/ExternalLink/ExternalLink";

const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

// MARKUP
export const ArticleTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,

    h2: ({ children }) => <Text as="h2">{children}</Text>,
    h3: ({ children }) => <Text as="h3">{children}</Text>,
    h4: ({ children }) => <Text as="h4">{children}</Text>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url}>{children}</ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink href={value?.page?.slug?.current}>{children}</InternalLink>
    ),
  },
  types: {
    Image: ({ value }: { value: ImageProps }) => {
      const { image, maxWidth, _type } = value;

      return <Image image={image} maxWidth={maxWidth} _type={_type} />;
    },
    YoutubeVideo: ({ value }: { value: YoutubeVideoProps }) => {
      const { url, caption, maxWidth, _type } = value;

      return (
        <YoutubeVideo url={url} caption={caption} maxWidth={maxWidth} _type={_type} />
      );
    },
  },
};
