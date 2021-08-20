import faker from 'faker';
import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';
import { RawHeading } from '../text/RawHeading/RawHeading';

export const Sandbox = () => (
  <section>
    <RawHeading as="h1" min={18} max={32} my={18}>
      {capitalizeFirstLetter(faker.lorem.words())}
    </RawHeading>

    <ExampleText blocks={EXAMPLE_TEXT} preview={false} />
  </section>
);
