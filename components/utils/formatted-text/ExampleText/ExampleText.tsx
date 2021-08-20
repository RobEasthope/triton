/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BlockContent from '@sanity/block-content-to-react';

import { Heading } from 'components/utils/text/RawHeading/RawHeading';
// import { YoutubeBlock } from 'components/blocks/YoutubeBlock/YoutubeBlock';

export interface ExampleTextProps {
  blocks: unknown;
  className?: string;
  as?: string;
  preview: boolean;
}

const BlockRenderer = (props) => {
  const { style = 'normal' } = props?.node as Record<string, unknown>;

  if (style === 'h2') {
    return <Heading as="h2">{props.children}</Heading>;
  }
  if (style === 'h3') {
    return <Heading as="h3">{props.children}</Heading>;
  }

  if (style === 'h4') {
    return <Heading as="h4">{props.children}</Heading>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,

    // Youtube block
    // youtubeBlock: (props) => {
    //   // eslint-disable-next-line react/destructuring-assignment, @typescript-eslint/naming-convention
    //   const { _type, url } = props?.node;

    //   return <YoutubeBlock _type={_type} url={url} />;
    // },
  },
};

export const ExampleText = ({
  blocks,
  className,
  as,
  preview,
}: ExampleTextProps) => (
  <div className={className}>
    <BlockContent
      as={as}
      blocks={blocks}
      serializers={serializers}
      preview={preview}
    />
  </div>
);
