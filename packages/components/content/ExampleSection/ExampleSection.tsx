import { ExampleFormattedText } from 'base/text/ExampleFormattedText/ExampleFormattedText';
import { MaxPageWidth } from 'base/styles/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from 'types/sanity-schema';
import { PaddedComponent } from 'base/styles/PaddedComponent/PaddedComponent';
import { Heading } from './ExampleSection.styles';

export interface ExampleSectionProps extends rawExampleSectionProps {
  preview: boolean;
}

export const ExampleSection = ({
  heading,
  text,
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
      </MaxPageWidth>
    </PaddedComponent>
  );
};
