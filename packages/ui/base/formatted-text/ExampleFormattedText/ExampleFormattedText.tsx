import { ReactNode } from 'react';
import BlockContent from '@sanity/block-content-to-react';

export interface ExampleFormattedTextProps {
  blocks: unknown;
  preview: boolean;
}

type BlockRendererProps = {
  node: { style: string };
  children: ReactNode;
};

const BlockRenderer = ({ node, children }: BlockRendererProps) => {
  const { style = 'normal' } = node;

  if (style === 'h2') {
    return <h2>{children}</h2>;
  }
  if (style === 'h3') {
    return <h3>{children}</h3>;
  }

  if (style === 'h4') {
    return <h4>{children}</h4>;
  }

  // Fall back to default handling
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return BlockContent.defaultSerializers.types.block({ node, children });
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
