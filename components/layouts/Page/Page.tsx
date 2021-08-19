/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { RenderSections } from 'components/utils/RenderSections/RenderSections';

export const Page = ({
  page,
  preview,
}: {
  page: Record<string, unknown>;
  preview: boolean;
}) => (
  <div className="">
    <main className="">
      {page?.sections && (
        <RenderSections sections={page?.sections} preview={preview} />
      )}
    </main>
  </div>
);
