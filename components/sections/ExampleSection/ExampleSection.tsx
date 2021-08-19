import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { ExampleSection as rawExampleSectionProps } from 'types/sanity-schema';

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
      {heading && <h1>{heading}</h1>}
      {text && <ExampleText blocks={text} preview={preview} />}
    </section>
  );
};
