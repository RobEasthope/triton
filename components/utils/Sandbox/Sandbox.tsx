import faker from 'faker';
import { ExampleFormattedText } from 'components/utils/text/ExampleFormattedText/ExampleFormattedText';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';
import { RawHeading } from '../text/RawHeading/RawHeading';

export const Sandbox = () => (
  <section>
    <RawHeading as="h1" min={18} max={32} my={32}>
      {capitalizeFirstLetter(faker.lorem.words())}
    </RawHeading>

    <ExampleFormattedText blocks={EXAMPLE_TEXT} preview={false} />
  </section>
);
