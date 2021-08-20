import { ExampleText } from 'components/utils/formatted-text/ExampleText/ExampleText';
import { EXAMPLE_TEXT } from '.storybook/mock-data/sanity-text';
import { RawHeading } from '../text/RawHeading/RawHeading';

import { themeClass, exampleStyle } from './styles.css';

export const Sandbox = () => (
  <section className={themeClass}>
    <h1 className={exampleStyle}>Hello world!</h1>

    <RawHeading as="h1" min={18} max={32} my={32}>
      Lorem ipsum
    </RawHeading>

    <ExampleText blocks={EXAMPLE_TEXT} preview={false} />
  </section>
);
