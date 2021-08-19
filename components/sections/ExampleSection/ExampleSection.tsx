import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { ExampleSection as ExampleSectionProps } from 'types/sanity-schema';

export const ExampleSection = ({ heading, text }: ExampleSectionProps) => {
  if (!heading && !text) {
    return null;
  }

  return (
    <section>
      {heading && <h1>{heading}</h1>}
      {text && <ExampleText blocks={text} />}
    </section>
  );
};
