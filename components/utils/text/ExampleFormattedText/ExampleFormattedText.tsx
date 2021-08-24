/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BlockContent from '@sanity/block-content-to-react';

import { RawHeading } from 'components/utils/text/RawHeading/RawHeading';
// import { YoutubeBlock } from 'components/blocks/YoutubeBlock/YoutubeBlock';

export interface ExampleFormattedTextProps {
  blocks: unknown;
  className?: string;
  as?: string;
  preview: boolean;
}

const BlockRenderer = (props) => {
  const { style = 'normal' } = props?.node as Record<string, unknown>;

  if (style === 'h2') {
    return (
      <RawHeading as="h2" min={28} max={72}>
        {props.children}
      </RawHeading>
    );
  }
  if (style === 'h3') {
    return (
      <RawHeading as="h3" min={21} max={32}>
        {props.children}
      </RawHeading>
    );
  }

  if (style === 'h4') {
    return (
      <RawHeading as="h4" min={18} max={24}>
        {props.children}
      </RawHeading>
    );
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

export const ExampleFormattedText = ({
  blocks,
  className,
  as,
  preview,
}: ExampleFormattedTextProps) => (
  <div className={className}>
    <BlockContent
      as={as}
      blocks={blocks}
      serializers={serializers}
      preview={preview}
    />
  </div>
);
