/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ReactNode } from 'react';
import BlockContent from '@sanity/block-content-to-react';

export interface ExampleFormattedTextProps {
  blocks: unknown;
  preview: boolean;
}

const BlockRenderer = (props: {
  node: { style: string };
  children: ReactNode;
}) => {
  // eslint-disable-next-line react/destructuring-assignment, no-unsafe-optional-chaining
  const { style = 'normal' } = props?.node;
  const { children } = props;

  if (style === 'h2') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, react/prop-types
    return <h2>{children}</h2>;
  }
  if (style === 'h3') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, react/prop-types
    return <h3>{children}</h3>;
  }

  if (style === 'h4') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, react/prop-types
    return <h4>{children}</h4>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,
  },
};

export const ExampleFormattedText = ({
  blocks,
  preview,
}: ExampleFormattedTextProps) => (
  <BlockContent blocks={blocks} serializers={serializers} preview={preview} />
);
