/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heading } from 'components/typography/Heading/Heading';
import { RenderSections } from 'components/utils/RenderSections/RenderSections';

export const Page = ({
  page,
  preview,
}: {
  page: Record<string, unknown>;
  preview: boolean;
}) => (
  <div className="">
    <h1 className="">Welcome to Triton</h1>
    <Heading as="h1" className="">
      Heading
    </Heading>

    <main className="">
      {page?.sections && (
        <RenderSections sections={page?.sections} preview={preview} />
      )}
    </main>
  </div>
);
