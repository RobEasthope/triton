import faker from 'faker';
import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

export const Sandbox = () => (
  <section>
    <h1>{capitalizeFirstLetter(faker.lorem.words())}</h1>
    <ExampleText blocks={EXAMPLE_TEXT} preview={false} />
  </section>
);
