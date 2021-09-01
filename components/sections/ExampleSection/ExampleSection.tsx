import { ExampleFormattedText } from 'components/utils/text/ExampleFormattedText/ExampleFormattedText';
import { MaxPageWidth } from 'components/utils/styles/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from 'types/sanity-schema';
import { ExampleSectionStyles } from './ExampleSection.styles';
import { StitchesText } from './stitches.styles';

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
    <ExampleSectionStyles as="section">
      <MaxPageWidth>
        {heading && <StitchesText>{heading}</StitchesText>}
        {heading && <h1>{heading}</h1>}
        {text && <ExampleFormattedText blocks={text} preview={preview} />}
      </MaxPageWidth>
    </ExampleSectionStyles>
  );
};
