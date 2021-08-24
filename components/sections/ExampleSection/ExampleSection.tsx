import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { MaxPageWidth } from 'components/utils/structural/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from 'settings/types/sanity-schema';

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
    <section>
      <MaxPageWidth>
        {heading && <h1>{heading}</h1>}
        {text && <ExampleText blocks={text} preview={preview} />}
      </MaxPageWidth>
    </section>
  );
};
