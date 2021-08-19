/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { RenderSections } from 'components/utils/RenderSections/RenderSections';

export const HomePage = ({ page, preview }) => (
  <>
    <main className="">
      {page?.sections && (
        <RenderSections sections={page?.sections} preview={preview} />
      )}
    </main>
  </>
);
