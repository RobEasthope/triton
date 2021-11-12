import { ExampleFormattedText } from '@/UI/base/text/ExampleFormattedText/ExampleFormattedText';
import { MaxPageWidth } from '@/UI/base/styles/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from '@/UI/types/sanity-schema';
import { PaddedComponent } from '@/UI/base/styles/PaddedComponent/PaddedComponent';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { Heading } from './ExampleSection.styles';

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
