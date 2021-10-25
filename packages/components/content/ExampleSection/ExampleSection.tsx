import { ExampleFormattedText } from '@/components/base/text/ExampleFormattedText/ExampleFormattedText';
import { MaxPageWidth } from '@/components/base/styles/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from '@/components/types/sanity-schema';
import { PaddedComponent } from '@/components/base/styles/PaddedComponent/PaddedComponent';
import { Heading } from './ExampleSection.styles';
import { Picture } from '@/components/base/media/Picture/Picture';

export interface ExampleSectionProps extends rawExampleSectionProps {
  preview: boolean;
}

export const ExampleSection = ({
  heading,
  text,
  image,
  preview,
}: ExampleSectionProps) => {
  if (!heading && !text) {
    return null;
  }

  return (
    <PaddedComponent as="section">
      <MaxPageWidth>
        {heading && <Heading as="h1">{heading}</Heading>}
        {text && <ExampleFormattedText blocks={text} preview={preview} />}
        {text && <Picture asset={image} mode="responsive" maxWidth={800} preview={preview} />}
      </MaxPageWidth>
    </PaddedComponent>
  );
};
